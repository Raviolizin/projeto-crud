const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/cadastro", async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        const usuarioExiste = await User.findOne({ email });

        if (usuarioExiste) {
            return res.status(400).json({
                mensagem: "Usuário já existe"
            });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = new User({
            nome,
            email,
            senha: senhaCriptografada
        });

        await novoUsuario.save();

        res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso"
        });

    } catch (erro) {

        res.status(500).json({
            erro
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, senha } = req.body;

        const usuario = await User.findOne({ email });

        if (!usuario) {

            return res.status(400).json({
                mensagem: "Usuário não encontrado"
            });

        }

        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaValida) {

            return res.status(401).json({
                mensagem: "Senha incorreta"
            });

        }

        console.log(process.env.JWT_SECRET);

        const token = jwt.sign(
            {
                id: usuario._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            token
        });

    }catch (erro) {

    console.log(erro);

    res.status(500).json({
        mensagem: erro.message
    });

    }

});

module.exports = router;