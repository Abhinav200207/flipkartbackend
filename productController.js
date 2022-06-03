const Product = require("./model")
const ErrorHandler = require("./utils/errorHandling")
const catchAsyncError = require("./middleware/catchAsyncError")
const ApiFeatures = require("./utils/apifeatures");

exports.createProduct = catchAsyncError(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    })
});


exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query).filter().sortItems().sortItemsPopularity();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    res.status(200).json({
        success: true,
        products,
        productsCount,
        filteredProductsCount,
    });
});