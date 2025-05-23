import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routesProductos from './routes/productos.js'
import routesOrders from './routes/orders.js'
import routesUsuarios from './routes/usuarios.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/products', routesProductos);
app.use('/orders', routesOrders);
app.use('/users', routesUsuarios);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT))
} catch (e) {
    console.log(e);
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion();
    process.exit(0);
});
