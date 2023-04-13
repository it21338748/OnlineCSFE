const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const productsController = require("../controllers/products-controller");

router.get("/", productsController.getAllProducts);
router.post("/add", productsController.addProduct);
router.get("/:id", productsController.getById);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;