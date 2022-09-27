const { newPost, allPosts, updatePost, deletePost } = require("./posts");
const {
  newComment,
  allComments,
  updateComment,
  deleteComment,
} = require("./comments");

module.exports = {
  newPost,
  allPosts,
  updatePost,
  deletePost,
  newComment,
  allComments,
  updateComment,
  deleteComment,
};
