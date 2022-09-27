const Data = require("../models/data");

module.exports = {
  newPost: async (req, res) => {
    try {
      const { text } = req.body;

      const post = new Data({ text });

      await post.save();
      return res.status(200).json({
        msg: "Post Added successfully",
      });
    } catch (err) {
      return res.status(500).json({
        msg: "Internal Server ERROR",
        ERROR: err,
      });
    }
  }, // Add New Post to the Database

  allPosts: async (req, res) => {
    try {
      await Data.find()
        .then((data) => {
          return res.status(200).json({
            msg: "All Posts fetched successfully",
            posts: data,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            msg: "Posts Not Found",
            ERROR: err,
          });
        });
    } catch (err) {
      return res.status(500).json({
        msg: "Internal Server ERROR",
        ERROR: err,
      });
    }
  }, // Fetch All Posts from the Database

  updatePost: async (req, res) => {
    try {
      const { text } = req.body;

      await Data.findByIdAndUpdate({ _id: req.params.id }, { text })
        .then((data) => {
          return res.status(200).json({
            msg: "Post Updated successfully",
            posts: data,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            msg: "Post Not Found",
            ERROR: err,
          });
        });
    } catch (err) {
      return res.status(500).json({
        msg: "Internal Server ERROR",
        ERROR: err,
      });
    }
  }, // Update A Post

  deletePost: async (req, res) => {
    try {
      await Data.findByIdAndDelete({ _id: req.params.id })
        .then((data) => {
          return res.status(200).json({
            msg: "Post Deleted successfully",
            posts: data,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            msg: "Post Not Found",
            ERROR: err,
          });
        });
    } catch (err) {
      return res.status(500).json({
        msg: "Internal Server ERROR",
        ERROR: err,
      });
    }
  }, // Delete A Post
};
