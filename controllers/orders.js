import ordersModel from "../models/orders.js";

class ordersController {
    constructor() {

    }

    async create(req, res) {
        const { userId, client, products, status, dataEntry } = req.body;
        try {
            const data = await ordersModel.create({ userId, client, products, status, dataEntry });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
            console.log(e)
        }
    }

    async update(req, res) {
        const { userId, client, products, status, dataEntry } = req.body;
        try {
            const { id } = req.params;
            const data = await ordersModel.update(id, { userId, client, products, status, dataEntry });
            res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await ordersModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await ordersModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await ordersModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new ordersController();