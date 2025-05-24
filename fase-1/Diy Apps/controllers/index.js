const Model = require("../models/model");

class Controller {
  static home(req, res) {
    res.render("home.ejs");
  }
}

module.exports = Controller;
