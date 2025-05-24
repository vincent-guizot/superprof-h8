const { Company, Girlgroup } = require('./class')
const pool = require('../db/config')

class Model{
    static async companies(){
        try {
            let query = `
                SELECT * FROM "Companies"
            `

            let {rows} = await pool.query(query)
            rows = rows.map(el => {
                return new Company(el.id, el.name)
            })
            return rows
        } catch (error) {
            throw error
        }
    }

    static async girlgroups(search){
        try {
            let query = `
                SELECT 
                    g.*,
                    c.name AS "CompanyName"
                FROM "GirlGroups" g
                INNER JOIN "Companies" c
                ON c.id = g."CompanyId"
                
            `

            if(search){
                query += `
                WHERE g.name ILIKE '%${search}%'
                `
            }

            query += `
                ORDER BY g.id
            `

            let {rows} = await pool.query(query)
            rows = rows.map(el => {
                return new Girlgroup(el.id, el.name, el.member, el.debutSong, el.CompanyId, el.CompanyName)
            })

            return rows
        } catch (error) {
            throw error
        }
    }

    static async girlgroupById(id){
        try {
            let query = `
                SELECT 
                    g.*,
                    c.name AS "CompanyName"
                FROM "GirlGroups" g
                INNER JOIN "Companies" c
                ON c.id = g."CompanyId"
                WHERE g.id = $1
            `
            let {rows} = await pool.query(query, [id])
            rows = rows.map(el => {
                return new Girlgroup(el.id, el.name, el.member, el.debutSong, el.CompanyId, el.CompanyName)
            })

            return rows[0]
        } catch (error) {
            throw error
        }
    }

    static async postAdd(name, member, debutSong, company){
        try {
            let errors = await Model.validation(name, member, debutSong, company)
            
            if(errors.length){
                throw {name: "ValidationError", errors}
            }

            let query = `
                INSERT INTO "GirlGroups" (name, member, "debutSong", "CompanyId")
                VALUES ($1, $2, $3, $4)
            `
            await pool.query(query, [name, member, debutSong, company])
        } catch (error) {
            throw error
        }
    }

    static async getDelete(id){
        try {
            let query = `
                DELETE FROM "GirlGroups"
                WHERE id = $1
            `
            await pool.query(query, [id])
        } catch (error) {
            throw error
        }
    }

    static async postEdit(name, member, debutSong, company, id){
        try {
            let errors = await Model.validation(name, member, debutSong, company)
            
            if(errors.length){
                throw {name: "ValidationError", errors}
            }

            let query = `
                UPDATE "GirlGroups"
                SET
                    name = $1,
                    member = $2,
                    "debutSong" = $3,
                    "CompanyId" = $4
                WHERE
                    id = $5
            `
            await pool.query(query, [name, member, debutSong, company, id])
        } catch (error) {
            throw error
        }
    }

    static async validation(name, member, debutSong, company){
        try {
            let errors = []
            if(!name){
                errors.push("Name required!")
                // errors[0] = "Name required!"
            }
            if(!member){
                errors.push("Member required!")
            }else if(member < 3){
                errors.push("Minimal member is 3")
            }
            if(!debutSong){
                errors.push("Debut Song required!")
            }
            if(!company){
                errors.push("Company required!")
            }

            return errors
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model