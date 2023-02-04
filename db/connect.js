const mongoose = require("mongoose");


const connectDB = () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.Mongoose_url, {
        useNewUrlParser: true
    })
}

module.exports = connectDB;