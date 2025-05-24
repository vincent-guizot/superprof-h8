const pg = require('pg')
const { Pool } = pg
 
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'gg-db',
  idleTimeoutMillis: 500
})
 
// async function test() {
//     try {
//         console.log(await pool.query('SELECT NOW()'))
//     } catch (error) {
//         console.log(error);
//     }
// }

// test()

module.exports = pool