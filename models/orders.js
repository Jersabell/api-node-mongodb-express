import mongoose from 'mongoose';
import Orders from '../schemas/orders.js';

class ordersModel {
    async create(order) {
        return await Orders.create(order);
    }

    async update(id, order) {
        return await Orders.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, order, { new: true });
    }

    async delete(id) {
        return await Orders.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

    async getAll() {
        return await Orders.find();
    }

    async getOne(id) {
        return await Orders.findById(id);
    }
}


export default new ordersModel();
