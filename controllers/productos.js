import productosModel from '../models/productos.js';

class productosController {
    constructor() {

    }

    async create(req, res) {
        const { name, price, type, dateEntry, image } = req.body;
        try {
            const data = await productosModel.create({ name , type, price, dateEntry, image });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        const { name , type, price, dateEntry, image } = req.body;
        try {
            const { id } = req.params;
            const data = await productosModel.update(id, { name , type, price, dateEntry, image });
            res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await productosModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await productosModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await productosModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new productosController();