import { generarToken } from '../helpers/autenticacion.js';
import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcrypt';


class usuariosController {
    constructor() {
    }

    async register(req, res) {
        try {
            const { email, name, rol, password } = req.body;

            const usuarioExiste = await usuariosModel.getOne({ email });
            if (usuarioExiste) {
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

        const usuarioExiste = await usuariosModel.getOne({ email });
        if (!usuarioExiste) {
            return res.status(400).json({ error: 'El usuario no existe' });
        }

        const claveValida = await bcrypt.compare(password, usuarioExiste.password);

        if (!claveValida) {
            return res.status(400).json({ error: 'Clave no válida' });
        }

        const token = generarToken(email);

        return res.status(200).json({ msg: 'Usuario autenticado', token, usuarioExiste });
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
}

export default new usuariosController();