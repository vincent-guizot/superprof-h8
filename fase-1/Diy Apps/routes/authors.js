const express = require("express");
const Controller = require("../controllers");
const authorRoute = express.Router();

authorRoute.get("/", Controller.getAuthors);
authorRoute.get("/detail", Controller.getAuthorById);

module.exports = authorRoute;
