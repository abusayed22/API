const blogModel = require('../models/blog');
// const blogjson = require('../blogs.json')


const getAllBlogs = async(req,res) => {
    const {name} = req.query
    const queryObject = {}

    if(name) {
        queryObject.name = name;
    }

    const myData = await blogModel.find(queryObject);
    
    res.status(200).json({myData})
}

const getAllBlogsTesting = async(req,res) => {
    // const myData = await blogModel.find(req.query)
    res.status(200).json({msg: "I am Testing blogs"});
}




module.exports = { getAllBlogs, getAllBlogsTesting};