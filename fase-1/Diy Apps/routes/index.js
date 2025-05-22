const express = require("express");
const Controller = require("../controllers/");
const router = express.Router();
const authorRouters = require("./authors");
const postRouters = require("./posts");

// route
// app.METHOD(PATH/ENDPOINT, HANDLER/FUNCTION)
// ? Static route
router.get("/", Controller.home);

// router.use("/authors", authorRouters);
// router.use("/posts", postRouters);

module.exports = router;
