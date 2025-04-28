import express from 'express';
const route = express.Router();
import productosController from '../controllers/productos.js' ;
import { verificarToken } from '../helpers/autenticacion.js';

route.post('/', verificarToken, productosController.create);
route.get('/:id', productosController.getOne);
route.get('/', productosController.getAll);
route.put('/:id', verificarToken, productosController.update);
route.delete('/:id', verificarToken, productosController.delete);

export default route;