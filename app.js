const express = require('express')

const app = express();

const port = process.env.port || 7000;

app.get("/",(req,res) => {
    res.send("Hello, i am live")
    
})


// const start = async () => {
//     try {
//         app.listen(port, () => {
//             console.log(`${port} yes i am connect`);
//         }) 
//     } catch (error) {
//         console.log(error);
//     }

// }

// start();
app.listen(port, () => {
    console.log(`${port} yes i am connected`);
})