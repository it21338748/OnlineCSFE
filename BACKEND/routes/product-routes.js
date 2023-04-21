const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const productsController = require("../controllers/products-controller");

router.get("/getProducts", productsController.getAllProducts);
router.post("/addProduct", productsController.addProduct);
router.get("/get-product/:id", productsController.getById);
router.put("/update-product/:id", productsController.updateProduct);
router.delete("/delete-product/:id", productsController.deleteProduct);

module.exports = router;