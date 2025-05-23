class Controller {
  static home(req, res) {
    res.render("home.ejs");
  }

  static async getAuthors(req,res){
    try {
      //
    } catch(err){
      res.json(err
    }
  }

  static async getPosts(req,res){
    try {
      //
    } catch(err){
      res.json(err
    }
  }
  
}

module.exports = Controller;
