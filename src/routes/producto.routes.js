import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

router.route('/nuevo/producto').get(listarProductos)

export default router