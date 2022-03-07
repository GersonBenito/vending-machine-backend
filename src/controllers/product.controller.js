const { response } = require("express");
const ProductSchema = require('../models/product.model');

const addProduct = async (req, res = response) =>{
    try {
        const productData = req.body;
        const product = new ProductSchema(productData);
        await product.save();

        return res.status(201).json({
            status: 201,
            message: 'Product add success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Oops!, occurred a error to try add a product'
        });
    }
}

const getAllProducts = async (req, res = response) =>{
    try {
        const products = await ProductSchema.find({});

        return res.status(200).json({
            status: 200,
            data: products,
            message: 'Products obtaineds success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Oops! occurred a error to try obtained the products'
        });
    }
}


module.exports = {
    addProduct,
    getAllProducts,
}