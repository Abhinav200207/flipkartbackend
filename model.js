const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "product name required"]
    },
    price: {
        type: Number,
        required: [true, "product price required"],
        maxLength: [8, "Cannot be more than 8 character"]
    },
    rating: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    numberofratings: {
        type: Number,
        default: 0
    },
    imageurl: {
        type: String,
        required: true
    },
    catogery: {
        type: Number,
        required: [true, "product catogery required"]
    },
    brand: {
        type: String,
        required: [true, "product brand required"]
    },
    pop:{
        type:Number,
        required: [true, "product popularity required"]
    }
});


module.exports = mongoose.model("Product", productSchema);