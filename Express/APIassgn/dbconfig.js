import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "myShop",
  connectionLimit: 100,
});

export default pool;
