import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";
import clienteRouter from "./routes/clientes.routes.js";
import empleadoRouter from "./routes/empleados.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT

conectarDB();

app.use(express.json());

app.use("/categorias",categoriaRouter)
app.use("/clientes", clienteRouter)
app.use("/empleados", empleadoRouter)

app.listen(PORT, ()=>{
    console.log(`running from port 3309`);
})

