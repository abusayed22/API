const blogModel = require('../models/blog');


const getAllBlogs = async(req,res) => {
    const myData = await blogModel.find({});
    res.status(200).json({myData})
}

const getAllBlogsTesting = async(req,res) => {
    res.status(200).json({msg: "I am Testing blogs"});
}




module.exports = { getAllBlogs, getAllBlogsTesting};