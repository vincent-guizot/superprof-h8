const pool = require("./config");
const fs = require('fs').promises;

async function seeding() {
    try {
        const dataComp = JSON.parse(await fs.readFile('./data/company.json', 'utf8')).map(el => {
            return `('${el.name}')`
        })

        const dataGG = JSON.parse(await fs.readFile('./data/girlGroup.json', 'utf8')).map(el => {
            return `('${el.name}', ${el.member}, ${el.company}, '${el.debutSong}')`
        })

        const seedComp = `
            INSERT INTO "Companies"(name)
            VALUES ${dataComp}
        `

        const seedGG = `
            INSERT INTO "GirlGroups" (name, member, "CompanyId", "debutSong")
            VALUES  ${dataGG}
        `

        await pool.query(seedComp)
        console.log("SUCCESS SEED COMPANIES");
        await pool.query(seedGG)
        console.log("SUCCESS SEED GIRLGROUPS");
        
    } catch (error) {
        console.log("ERROR SEEDING", error);
    }
}

seeding()

/*
    INSERT INTO "Companies" ("name")
    VALUES ('YG'), ('HYBE')
*/
