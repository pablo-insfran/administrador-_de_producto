const ProductsControllers = require("../controllers/products.controllers")

module.exports = app => {
    app.post("/api/products/new", ProductsControllers.createProducts);
}