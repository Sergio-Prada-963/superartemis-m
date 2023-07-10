import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT

conectarDB();

app.use("/all",categoriaRouter)

app.listen(PORT, ()=>{
    console.log(`running from port 3309`);
})

