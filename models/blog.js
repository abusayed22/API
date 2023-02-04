const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        default: 'please author name',
        required: [true," must be name"]
    },
    heading: {
        type:String,
        default: 'lorem sdfwseris a oewr asdfjhsdf sadfhsdf  lsadfsdf',
        required: [true," must be your contend heading"]
    },
    contend: {
        type:String,
        required: [true," must have your blog's contend "]
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Blog", blogSchema)
