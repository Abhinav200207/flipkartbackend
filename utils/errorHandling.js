// This is error handling class so that we do not need to write same boilerplate code again and again

class ErrorHandler extends Error { // extending Error super class

    constructor(message, statusCode) { // Constructor of ErrorHandler class

        super(message) // Constructor of super class Error
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.costructor)
    }
}

module.export = ErrorHandler