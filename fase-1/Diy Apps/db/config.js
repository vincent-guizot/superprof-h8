const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "DIYPlatform",
  idleTimeoutMillis: 500,
});

module.exports = pool;
