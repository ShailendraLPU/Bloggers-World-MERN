const express = require("express");
const router = express.Router();
const Blog = require("../models/blogs");

router.get("/blogs", async (req, res) => {
  const result = await Blog.find({});
  res.send(result);
});

router.get("/blogs/user/:name", async (req, res) => {
  const result = await Blog.find({ user: req.params.name });
  res.send(result);
});
router.post("/blogs", async (req, res) => {
  const result = await Blog.create(req.body);
  res.send(result);
});

router.get("/blogs/:id", async (req, res) => {
  const result = await Blog.findById(req.params.id);
  res.send(result);
});

router.patch("/blogs/:id", async (req, res) => {
  const result = await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.send(result);
});

router.delete("/blogs/:id", async (req, res) => {
  const result = await Blog.findByIdAndDelete(req.params.id, req.body);
  res.send(result);
});

module.exports = router;
