const Products = require("../models/products.models")

module.exports.createProducts = (req, res) => {
    Products.create(req.body)
        .then(newProducts => res.json({ result: newProducts }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};