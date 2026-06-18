const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const conectarBanco = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

async function iniciarServidor() {

    await conectarBanco();

    app.get("/", (req, res) => {
        res.send("API funcionando!");
    });

    app.use("/produtos", require("./routes/produtos"));
    app.use("/auth", require("./routes/auth"));

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });

}

iniciarServidor();