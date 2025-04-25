import express from 'express';
const route = express.Router();
import ordersController from '../controllers/orders.js' ;
import { verificarToken } from '../helpers/autenticacion.js';

route.post('/', ordersController.create);
route.get('/:id', ordersController.getOne);
route.get('/', ordersController.getAll);
route.put('/:id', ordersController.update);
route.delete('/:id', ordersController.delete);

export default route;