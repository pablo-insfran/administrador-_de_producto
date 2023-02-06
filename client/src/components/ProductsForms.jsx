import React, {useState} from 'react'
import axios from 'axios'


const ProductsForms = () => {

    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/products/new', {
            title,
            price,
            description
        })
        .then((newProducts) => {console.log(newProducts)})
        .catch((error) => {console.log("Algo salió mal", error )})
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div><h2>Product Manager</h2></div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default ProductsForms