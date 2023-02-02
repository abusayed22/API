

const getAllBlogs = async(req,res) => {
    res.status(200).json({msg:" I am Blog"})
}

const getAllBlogsTesting = async(req,res) => {
    res.status(200).json({msg: "I am Testing blogs"});
}




module.exports = { getAllBlogs, getAllBlogsTesting};