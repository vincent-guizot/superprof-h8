const pool = require("./config");
const fs = require('fs').promises;

async function seeding() {
    try {
        const dataAuthor = JSON.parse(await fs.readFile('./data/authors.json', 'utf8')).map(el => {
            return `('${el.fullName}, ${el.gender}')`
        })

        const dataPost = JSON.parse(await fs.readFile('./data/posts.json', 'utf8')).map(el => {
            return `('${el.title}', ${el.difficulty}, ${el.estimatedTime}, '${el.description}, ${el.totalVote}, ${el.imageUrl}, ${el.createdDate}, ${el.AuthorId}')`
        })

        const seedAuthor = `
            INSERT INTO "Authors"(fullName, gender)
            VALUES ${dataAuthor}
        `

        const seedPost = `
            INSERT INTO "Posts" (title, difficulty, estimatedTime, description, totalVote, imageUrl, createdDate, "AuthorId")
            VALUES  ${dataPost}
        `

        await pool.query(seedAuthor)
        console.log("SUCCESS SEED AUTHORS");
        await pool.query(seedPost)
        console.log("SUCCESS SEED POSTS");
        
    } catch (error) {
        console.log("ERROR SEEDING", error);
    }
}

seeding()

/*
    INSERT INTO "Companies" ("name")
    VALUES ('YG'), ('HYBE')
*/
