import dotenv from "dotenv";
dotenv.config();  // ✅ Must come before using process.env

import pkg from "pg";
const { Pool } = pkg;


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

pool.on("connect", () => {
    console.log("✅ Connection pool established with Database");
});

export default pool;
