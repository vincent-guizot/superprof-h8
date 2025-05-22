const pool = require("./config");

(async () => {
  try {
    const createAuthor = `
            CREATE TABLE IF NOT EXISTS "Authors"(
                id SERIAL PRIMARY KEY,
                fullName VARCHAR(120) NOT NULL,
                gender varchar(6) NOT NULL
            )
        `;

    const createPost = `
            CREATE TABLE IF NOT EXISTS "Posts"(
                id SERIAL PRIMARY KEY,
                title VARCHAR(100),
                difficulty VARCHAR(6),
                estimatedTime INTEGER,
                description TEXT,
                totalVote INTEGER,
                imageUrl VARCHAR(100),
                createdDate TIMESTAMP,
                "AuthorId" INTEGER,
                FOREIGN KEY("AuthorId")
                REFERENCES "Authors"("id")
            )
        `;

    const drop = `
            DROP TABLE IF EXISTS "Posts", "Authors"
        `;

    await pool.query(drop);
    console.log("SUCCESS DROP");
    await pool.query(createAuthor);
    console.log("SUCCESS CREATE AUTHORS");
    await pool.query(createPost);
    console.log("SUCCESS CREATE POSTS");
  } catch (error) {
    console.log("ERROR CREATE TABLE", error);
  }
})();
