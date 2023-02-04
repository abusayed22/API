const connectDb = require('./db/connect');
const blogs = require('./models/blog');
const blogsJson = require('./blogs.json');
require("dotenv").config()


const start = async() => {
    try {
        await connectDb(process.env.Mongoose_url)
        await blogs.create(blogsJson);

    } catch (error) {
        console.log(error);
    }
}


start();