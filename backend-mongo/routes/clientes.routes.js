import express, { Router } from "express";
import {obtenerclientes, agregarCliente, borrarCliente, actualizarCliente, oneCliente} from "../controllers/clientes.controllers.js"

const clienteRouter = express(Router);

clienteRouter.get("/all", obtenerclientes);
clienteRouter.post("/add", agregarCliente);
clienteRouter.delete("/borrar/:id", borrarCliente);
clienteRouter.patch("/actz/:id", actualizarCliente);
clienteRouter.get("/oneClie/:id", oneCliente);

export default clienteRouter