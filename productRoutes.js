const express = require('express');
const { createProduct, getAllProducts } = require('./productController.js');


const router = express.Router();
router.route("/products").get(getAllProducts); //.post(createProduct);

module.exports = router;