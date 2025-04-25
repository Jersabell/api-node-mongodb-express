import mongoose from "mongoose";

const ProductosSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        dateEntry: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }
)

export default mongoose.model('Productos', ProductosSchema)