const mongoose = require('mongoose');

exports.connectDatabase = () => {
    console.log("Yahan tak aareha hai bhai");
    return mongoose.connect("mongodb+srv://Abhinav:abhinav123@nodejsproject.pwxex.mongodb.net/InternWork?retryWrites=true&w=majority").then((data) => {
        console.log(`Connected to MongoDB database ${data}`);
    }).catch((err) => {
        console.log(`ERROR!!!! connecting to MongoDB database ${err.message}`);
    });
}