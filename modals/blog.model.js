const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const blogSchema = Schema({
  s_no: {
    type: String,
    required: true,
    unique: true,
  },
  blog_title: {
    type: String,
    required: true,
  },
  blog_status: {
    type: String,
  },
  created_on: {
    type: Date,
  },
});

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
