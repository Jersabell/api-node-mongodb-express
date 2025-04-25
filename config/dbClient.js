import 'dotenv/config';
// import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
        console.log('Conectado a la base de datos');
    }


    // Método para cerrar la conexión
    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log("Conexión a la base de datos cerrada");
        } catch (e) {
            console.error("Error al cerrar la conexión:", e);
        }
    }
}

// Nota: No llamamos cerrarConexion() aquí porque la API está en funcionamiento permanente.
// Este método se puede utilizar cuando sea necesario cerrar la conexión, por ejemplo,
// cuando la aplicación se esté cerrando o en situaciones específicas de mantenimiento.

export default new dbClient();