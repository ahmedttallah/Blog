const router = require("express").Router();

// @Desc Posts APIs
// @Resquest [ALL]
// @Route /api/posts
router.use("/posts", require("./posts"));

// @Desc Comments APIs
// @Resquest [ALL]
// @Route /api/comments
router.use("/comments", require("./comments"));


module.exports = router;
