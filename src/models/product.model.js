const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    title: { type: String, required: true },
    urlImage: { type: String, required: true },
    price: { type: Number, required: true },
    preparationTime: { type: Number, required: true }, 
    category: { type: Schema.Types.ObjectId, ref: 'Categories' },
    hot: { type: Boolean, required: true }
});

module.exports = model('Product', ProductSchema);