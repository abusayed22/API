const blogModel = require('../models/blog');
// const blogjson = require('../blogs.json')


const getAllBlogs = async (req, res) => {

    // TODO:
    const { name, heading, contend } = req.query
    const queryObject = {}
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'};
    }

    
    
    // TODO:


    let apiData = blogModel.find(queryObject)

    if(queryObject.sort) {
        let sortFix = sort.replace(",", " ")
        apiData = apiData.sort(sortFix)
        // queryObject.sort = sortFix;
    }
    const myData = await apiData;

    res.status(200).json({ myData })
}

const getAllBlogsTesting = async (req, res) => {
    // const myData = await blogModel.find(req.query)
    res.status(200).json({ msg: "I am Testing blogs" });
}




module.exports = { getAllBlogs, getAllBlogsTesting };