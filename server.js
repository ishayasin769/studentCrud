import express from "express";
import logger from "./src/middleware/logger.middleware.js";
import router from "./src/routers/router.js";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from './src/config/db.js';

dotenv.config();
console.log("MONGO_URL:", process.env.MONGO_URL);
connectDB();

const app = express();

app.use(express.json());
app.use(logger);


app.use("/students", router);

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});