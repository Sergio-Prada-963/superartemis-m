import express from "express";
import {obtenerCategoria, agregarCategoria, borrarCategoria, actualizarCategorias, oneCategoria} from "../controllers/categoria.controller.js";

const categoriaRouter = express.Router();

categoriaRouter.get("/all", obtenerCategoria)
categoriaRouter.post("/add", agregarCategoria)
categoriaRouter.delete("/borrar/:id", borrarCategoria)
categoriaRouter.patch("/actz/:id", actualizarCategorias)
categoriaRouter.get("/oneCatg/:id", oneCategoria)


export default categoriaRouter;