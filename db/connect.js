const mongoose = require("mongoose");

// const url = "mongodb+srv://my_first_api:abusayed@cluster0.e8zeiay.mongodb.net/?retryWrites=true&w=majority";
const connectDB = () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.Mongoose_url, {
        useNewUrlParser: true
    })
}

module.exports = connectDB;