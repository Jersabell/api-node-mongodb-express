import { generarToken } from '../helpers/autenticacion.js';
import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcrypt';


class usuariosController {
    constructor() {
    }

    async register(req, res) {
        try {
            const { email, name, rol, password } = req.body;

            const user = await usuariosModel.getOne({ email });
            if (user) {
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const claveEncryptada = await bcrypt.hash(password, 12);


            const data = await usuariosModel.create({
                email,
                name,
                rol,
                password: claveEncryptada
            });

            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await usuariosModel.getOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'El usuario no existe' });
        }

        const claveValida = await bcrypt.compare(password, user.password);

        if (!claveValida) {
            return res.status(400).json({ error: 'Clave no válida' });
        }

        const accessToken = generarToken(email);

        return res.status(200).json({ msg: 'Usuario autenticado', accessToken, user });
    }

    async profile(req, res) {
        try {
            console.log(req.emailConectado);
            const data = await usuariosModel.getOne({ email: req.emailConectado });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAllUsers(req, res) {
        try {
            const data = await usuariosModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new usuariosController();