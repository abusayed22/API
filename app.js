const express = require('express');
const connectDB = require("./db/connect")
require("dotenv").config();

const app = express();

const port = process.env.port || 7000;

const blog_route = require('./routes/blogs');

app.get("/", (req, res) => {
    res.send("Hello, i am live")

})

app.use("/api/blogs", blog_route);


const start = async () => {
    try {
        await connectDB(process.env.Mongoose_url);
        app.listen(port, () => {
            console.log(`${port} yes i am connected`);
        })  
    } catch (error) {
        console.log(error);
    }
}

start();
