import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";
import clienteRouter from "./routes/clientes.routes.js";
import empleadoRouter from "./routes/empleados.routes.js";

const app = express();
dotenv.config();
app.use(cors())
const PORT = process.env.PORT

conectarDB();

app.use(express.json());

app.use("/api/categorias",categoriaRouter)
app.use("/api/clientes", clienteRouter)
app.use("/api/empleados", empleadoRouter)

app.listen(PORT, ()=>{
    console.log(`running from port 3309`);
})

