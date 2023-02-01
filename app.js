const express = require('express')

const app = express();

const port = process.env.Port || 5695

app.get("/",(res,req) => {
    res.send("Hello, i am live")
})


const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`${port} yes i am connect`);
        }) 
    } catch (error) {
        console.log(error);
    }
}