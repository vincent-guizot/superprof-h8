const pool = require("./config");
const fs = require("fs").promises;

async function seeding() {
  try {
    const authors = JSON.parse(
      await fs.readFile("./data/authors.json", "utf8")
    );
    const valuesAuthor = [];
    const placeholders = authors.map((author, i) => {
      const base = i * 2; // 4 columns
      valuesAuthor.push(author.fullName, author.gender);
      return `($${base + 1}, $${base + 2})`;
    });

    const posts = JSON.parse(await fs.readFile("./data/posts.json", "utf8"));
    const valuesPost = [];
    const placeholdersPost = posts.map((post, i) => {
      const base = i * 8; // 4 columns
      valuesPost.push(
        post.title,
        post.difficulty,
        post.estimatedTime,
        post.description,
        post.totalVote,
        post.imageUrl,
        post.createdDate,
        post.AuthorId
      );
      return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${
        base + 5
      }, $${base + 6}, $${base + 7}, $${base + 8})`;
    });

    const seedAuthor = `
            INSERT INTO "Authors" (fullname, gender)
            VALUES ${placeholders.join(", ")}
        `;

    const seedPost = `
            INSERT INTO "Posts" (title, difficulty, estimatedtime, description, totalvote, imageurl, createddate, "AuthorId")
            VALUES ${placeholdersPost.join(", ")}
        `;

    await pool.query(seedAuthor, valuesAuthor);
    console.log("SUCCESS SEED AUTHORS");
    await pool.query(seedPost, valuesPost);
    console.log("SUCCESS SEED POSTS");
  } catch (error) {
    console.log("ERROR SEEDING", error);
  }
}

seeding();

/*
    INSERT INTO "Companies" ("name")
    VALUES ('YG'), ('HYBE')
*/
