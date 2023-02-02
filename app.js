const express = require('express')

const app = express();

const port = process.env.port || 7000;

const blog_route = require('./routes/blogs');

app.get("/",(req,res) => {
    res.send("Hello, i am live")
    
})

app.use("/api/blogs", blog_route);


app.listen(port, () => {
    console.log(`${port} yes i am connected`);
})