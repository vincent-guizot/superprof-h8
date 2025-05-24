const { Author, AuthorDetail, Post, PostDetail } = require("./class");
const pool = require("../db/config");

class Model {
  static async getAuthors() {
    try {
      let query = `
                SELECT * FROM "Authors"
            `;

      let { rows } = await pool.query(query);
      rows = rows.map((author) => {
        const { id, fullname, gender } = author;
        return new Author(id, fullname, gender);
      });
      return rows;
    } catch (error) {
      throw error;
    }
  }
  static async getPosts() {
    try {
      let query = `
                SELECT * FROM "Posts"
            `;

      let { rows } = await pool.query(query);
      rows = rows.map((post) => {
        const {
          id,
          title,
          difficulty,
          estimatedtime,
          description,
          totalvote,
          imageurl,
          createddate,
          AuthorId,
        } = post;
        return new Post(
          id,
          title,
          difficulty,
          estimatedtime,
          description,
          totalvote,
          imageurl,
          createddate,
          AuthorId
        );
      });
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;
