const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  user: {
    type: String,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  imgurl: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
