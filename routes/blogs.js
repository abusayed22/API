const { Router } = require("express");
const express = require("express");

const router = express.Router();

const { getAllBlogs, getAllBlogsTesting } = require("../controlloers/blogs")

router.route("/").get(getAllBlogs);
router.route("/testing").get(getAllBlogsTesting);



module.exports = router;