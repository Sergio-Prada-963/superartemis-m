import express, { Router } from "express";
import {obtenerclientes, agregarCliente, borrarCliente, actualizarCliente, oneCliente} from "../controllers/clientes.controllers.js"

const clienteRouter = express(Router);

clienteRouter.get("/", obtenerclientes);
clienteRouter.post("/", agregarCliente);
clienteRouter.delete("/:id", borrarCliente);
clienteRouter.patch("/:id", actualizarCliente);
clienteRouter.get("/:id", oneCliente);

export default clienteRouter