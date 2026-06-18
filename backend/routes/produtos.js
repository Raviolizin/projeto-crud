const express = require("express");
const router = express.Router();

const Produto = require("../models/Produto");
const auth = require("../middleware/auth");


// CREATE
router.post("/", auth, async (req, res) => {

    try {

        const produto = await Produto.create(req.body);

        res.status(201).json(produto);

    } catch (erro) {

        res.status(500).json(erro);

    }

});


// READ
router.get("/", auth, async (req, res) => {

    try {

        const produtos = await Produto.find();

        res.json(produtos);

    } catch (erro) {

        res.status(500).json(erro);

    }

});


// UPDATE
router.put("/:id", auth, async (req, res) => {

    try {

        const produto = await Produto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(produto);

    } catch (erro) {

        res.status(500).json(erro);

    }

});


// DELETE
router.delete("/:id", auth, async (req, res) => {

    try {

        await Produto.findByIdAndDelete(req.params.id);

        res.json({
            mensagem: "Produto removido"
        });

    } catch (erro) {

        res.status(500).json(erro);

    }

});

module.exports = router;