const router = require("express").Router();
const { newComment, allComments, updateComment, deleteComment } = require("../controllers");

// @Desc Add a new comment
// @Resquest [POST]
// @Route /api/comments/new
router.post("/new", newComment);

// @Desc Read Comments
// @Resquest [GET]
// @Route /api/comments/all
router.get("/all", allComments);

// @Desc Update a Comment
// @Resquest [PUT]
// @Route /api/comments/update/:id
router.put("/update/:id", updateComment);

// @Desc Delete a Comment
// @Resquest [DELETE]
// @Route /api/comments/delete/:id
router.delete("/delete/:id", deleteComment);

module.exports = router;
