const express = require("express");
const Controller = require("../controllers");
const postRoute = express.Router();

postRoute.get("/", Controller.getPosts);
postRoute.get("/:id", Controller.getPostById);
postRoute.get("/add", Controller.addPostPage);
postRoute.post("/add", Controller.addPost);
postRoute.get("/:id/edit", Controller.editPostPage);
postRoute.post("/:id/edit", Controller.editPost);
postRoute.get("/:id/delete", Controller.deletePost);
postRoute.get("/:id/vote", Controller.addVote);

module.exports = postRoute;
