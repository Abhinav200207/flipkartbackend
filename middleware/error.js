var ErrorHandler = require("../utils/errorHandling") // importing custom error handling class 

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500  // status code
    err.message = err.message || "Internal server Error" // message

    if (err.message === "CastError"){  // it occur when wrong id of product or json is provided
        err = new ErrorHandler(`Product not found ${err.path}`,400) // using custom error handler
    }


    res.status(err.statusCode).json({ // sending response as error with error message
        success: false,
        message: err.message
    })
}