const Model = require("../models/model");

class Controller {
  static home(req, res) {
    res.render("home.ejs");
  }
  static async getAuthors(req, res) {
    try {
      //
      let authors = await Model.getAuthors();
      let result = [];
      result = authors.map((author) => {
        const { id, fullName, gender } = author;
        if (gender === "Male") return { id, name: `Mr. ${fullName}` };
        else if (gender === "Female") return { id, name: `Ms. ${fullName}` };
      });
      res.render("author.ejs", { authors: result });
      // res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async getPosts(req, res) {
    try {
      //
      let posts = await Model.getPosts();

      res.render("post.ejs", { posts });
    } catch (err) {
      res.json(err);
    }
  }
  static async getAuthorById(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async getPostById(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async addPostPage(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async editPostPage(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async addPost(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async editPost(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async deletePost(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async addVote(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = Controller;
