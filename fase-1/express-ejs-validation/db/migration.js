const pool = require("./config");

(async() => {
    try {
        const createComp = `
            CREATE TABLE IF NOT EXISTS "Companies"(
                id SERIAL PRIMARY KEY,
                name VARCHAR
            )
        `

        const createGG = `
            CREATE TABLE IF NOT EXISTS "GirlGroups"(
                id SERIAL PRIMARY KEY,
                name VARCHAR,
                member INTEGER,
                "CompanyId" INTEGER,
                "debutSong" VARCHAR,
                FOREIGN KEY("CompanyId")
                REFERENCES "Companies"("id")
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
            )
        `

        const drop = `
            DROP TABLE IF EXISTS "GirlGroups", "Companies"
        `

        await pool.query(drop)
        console.log("SUCCESS DROP");
        await pool.query(createComp)
        console.log("SUCCESS CREATE COMPANIES");
        await pool.query(createGG)
        console.log("SUCCESS CREATE GIRLGROUP");
        
    } catch (error) {
        console.log("ERROR CREATE TABLE", error);
    }
})()