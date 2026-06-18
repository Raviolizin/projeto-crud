const mongoose = require("mongoose");

async function conectarBanco() {

    try {

        console.log("Conectando ao MongoDB...");

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,
            family: 4
        });

        console.log("MongoDB conectado!");

    } catch (erro) {

        console.log("Erro ao conectar:");
        console.log(erro);

    }

}

module.exports = conectarBanco;