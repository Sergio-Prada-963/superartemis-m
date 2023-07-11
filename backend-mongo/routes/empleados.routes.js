import express from "express";
import {obtenerEmpleados, agregarEmpleado, borrarEmpleado, actualizarEmpleado, oneEmpleado} from "../controllers/empleados.controllers.js";

const empleadoRouter = express.Router();

empleadoRouter.get("/all", obtenerEmpleados)
empleadoRouter.post("/add", agregarEmpleado)
empleadoRouter.delete("/borrar/:id",borrarEmpleado)
empleadoRouter.patch("/actz/:id", actualizarEmpleado)
empleadoRouter.get("/oneEmple/:id", oneEmpleado)


export default empleadoRouter;