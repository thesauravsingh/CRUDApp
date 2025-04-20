import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import pool from "./config/db.js"

import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandler)

//Create user table if it doesn't exist
createUserTable();

//Testing POSTGRES
app.get("/", async(req, res) => {
    console.log("START")
    const result = await pool.query("SELECT current_database()");
    console.log("end")
    res.send(`THE database name is : ${result.rows[0].current_database}`)
});


// Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost: ${port}`);
})