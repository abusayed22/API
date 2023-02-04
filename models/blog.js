const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'please author name',
        required: [true, " must be name"]
    },
    heading: {
        type: String,
        default: 'lorem sdfwseris a oewr asdfjhsdf sadfhsdf  lsadfsdf',
        required: [true, " must be your contend heading"]
    },
    contend: {
        type: String,
        required: [true, " must have your blog's contend "]
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    title: {
        type: String
    },
    completed: {
        type: Boolean
    }
   
})

module.exports = mongoose.model("Blog", blogSchema)
