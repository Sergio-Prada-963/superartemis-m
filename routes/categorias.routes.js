import express from "express";
import {obtenerCategoria} from "../controllers/categoria.controller.js";

const categoriaRouter = express.Router();

categoriaRouter.get("/categorias", obtenerCategoria)

export default categoriaRouter;