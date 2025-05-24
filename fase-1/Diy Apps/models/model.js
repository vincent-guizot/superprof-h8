const { AuthorDetail, PostDetail } = require("./class");
const pool = require("../db/config");

class Model {
  static async getAuthors() {
    try {
      let query = `
                SELECT * FROM "Authors"
            `;

      let { rows } = await pool.query(query);
      console.log(rows);
      // rows = rows.map(el => {
      //     return new Company(el.id, el.name)
      // })
      // return rows
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;
