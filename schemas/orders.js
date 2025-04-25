import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true
        },

        client: {
            type: String,
            required: true
        },
        products: [
          {
            qty: {
                type: Number,
                required: true
              },
            product: {
              id: {type: Number},
              name: {type: String},
              price: {type: Number},
              image: {type: String},
              type: {type: String},
            }
          }
        ],

        status: {
            type: String,
            required: true
        },

        dataEntry: {
            type: String,
            required: true
        }
    }
)

export default mongoose.model('Orders', OrdersSchema)