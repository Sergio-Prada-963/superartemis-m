import express from "express";
import {obtenerCategoria, agregarCategoria, borrarCategoria, actualizarCategorias, oneCategoria} from "../controllers/categoria.controller.js";

const categoriaRouter = express.Router();

categoriaRouter.get("/", obtenerCategoria)
categoriaRouter.post("/", agregarCategoria)
categoriaRouter.delete("/:id", borrarCategoria)
categoriaRouter.patch("/:id", actualizarCategorias)
categoriaRouter.get("/:id", oneCategoria)


export default categoriaRouter;