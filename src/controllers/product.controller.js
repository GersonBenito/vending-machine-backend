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
            message: 'Oops!, occurred a error to the try add a product'
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
            message: 'Oops! occurred a error to the try obtained the products'
        });
    }
}

const updateProduct = async (req, res = response) =>{
    try {
        const productUpdate = req.body;
        const id = req.params.id;
        await ProductSchema.updateOne({_id: id}, productUpdate);

        return res.status(200).json({
            status: 200,
            message: 'Product update success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Oops!, occurred a error to the try update the product'
        });
    }
}

const deleteProduct = async (req, res = response) =>{
    try {
        const id = req.params.id;
        await ProductSchema.deleteOne({_id: id});

        return res.status(200).json({
            status: 200,
            message: 'Product delete success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Oops! occurred a error to the try delete the product'
        });
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}