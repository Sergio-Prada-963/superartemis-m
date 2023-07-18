import express from "express";
import {obtenerEmpleados, agregarEmpleado, borrarEmpleado, actualizarEmpleado, oneEmpleado} from "../controllers/empleados.controllers.js";

const empleadoRouter = express.Router();

empleadoRouter.get("/", obtenerEmpleados)
empleadoRouter.post("/", agregarEmpleado)
empleadoRouter.delete("/:id",borrarEmpleado)
empleadoRouter.patch("/:id", actualizarEmpleado)
empleadoRouter.get("/:id", oneEmpleado)


export default empleadoRouter;