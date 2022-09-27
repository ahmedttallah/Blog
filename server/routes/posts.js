const router = require("express").Router();
const { newPost, allPosts, updatePost, deletePost } = require("../controllers");

// @Desc Add a new post
// @Resquest [POST]
// @Route /api/posts/new
router.post("/new", newPost);

// @Desc Read Posts
// @Resquest [GET]
// @Route /api/posts/all
router.get("/all", allPosts);

// @Desc Update a Post
// @Resquest [PUT]
// @Route /api/posts/update/:id
router.put("/update/:id", updatePost);

// @Desc Delete a Post
// @Resquest [DELETE]
// @Route /api/posts/delete/:id
router.delete("/delete/:id", deletePost);

module.exports = router;
