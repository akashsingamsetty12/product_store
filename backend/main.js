import express from "express";
//const express=require('express');
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
/*import Product from "./models/product.model.js";
import mongoose from "mongoose";
*/
dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;
app.use(express.json());//allows the json data
app.use("/api/products",productRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log('server started at http://localhost:'+PORT);
})