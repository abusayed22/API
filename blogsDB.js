const connectDb = require('./db/connect');
const blogs = require('./models/blog');
const blogsJson = require('./blogs.json');
require("dotenv").config()


const start = async() => {
    try {
        await connectDb(process.env.Mongoose_url)
        await blogs.create(blogsJson);
        console.log('success blogDb');
    } catch (error) {
        console.log(error);
    }
}

// const start = async () => {
//     try {
//         await connectDB(process.env.Mongoose_url);
//         app.listen(port, () => {
//             console.log(`${port} yes i am connected`);
//         })  
//     } catch (error) {
//         console.log(error);
//     }
// }

start();