const Product = require("../model/Product");

const getAllProducts = async (req, res, next) => {
    let products;
    try {
      products = await Product.find();
    } catch (err) {
      console.log(err);
    }

    if (!products) {
        return res.status(404).json({ message: "No products found" });
      }
      return res.status(200).json({ products });
    };

    const getById = async (req, res, next) => {
        const id = req.params.id;
        let product;
        try {
          product = await Product.findById(id);
        } catch (err) {
          console.log(err);
        }
        if (!product) {
          return res.status(404).json({ message: "No Product found" });
        }
        return res.status(200).json({ product });
      };
      
      const addProduct = async (req, res, next) => {
        const { name, description, price, available, image } = req.body;
        let product;
        try {
          product = new Product({
            name,
            description,
            price,
            available,
            image, 
          });
          await product.save();
        } catch (err) {
          console.log(err);
        }
      
        if (!product) {
          return res.status(500).json({ message: "Unable To Add" });
        }
        return res.status(201).json({ product });
      };
      
      const updateProduct = async (req, res, next) => {
        const id = req.params.id;
        const { name, description, price, available, image } = req.body;
        let product;
        try {
          product = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            available,
            image,
          });
          product = await product.save();
        } catch (err) {
          console.log(err);
        }
        if (!product) {
          return res.status(404).json({ message: "Unable To Update By this ID" });
        }
        return res.status(200).json({ message: "Product updated successfully" });
      };
      
      const deleteProduct = async (req, res, next) => {
        const id = req.params.id;
        let product;
        try {
          product = await Product.findByIdAndRemove(id);
        } catch (err) {
          console.log(err);
        }
        if (!product) {
          return res.status(404).json({ message: "Unable To Delete By this ID" });
        }
        return res.status(200).json({ message: "Product Successfully Deleted" });
      };
      
      exports.getAllProducts = getAllProducts;
      exports.addProduct = addProduct;
      exports.getById = getById;
      exports.updateProduct = updateProduct;
      exports.deleteProduct = deleteProduct;