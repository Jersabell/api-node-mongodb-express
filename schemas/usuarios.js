import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        rol: {
            type: String,
            required: true,
            enum: ['admin', 'chef', 'waiter'],
        },
        password: {
            type: String,
            required: true,
        }
    }
);


export default mongoose.model('usuarios', usuarioSchema);