const jwt = require("jsonwebtoken");

function auth(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            mensagem: "Acesso negado"
        });
    }

    try {

        jwt.verify(token, process.env.JWT_SECRET);

        next();

    } catch {

        res.status(401).json({
            mensagem: "Token inválido"
        });

    }

}

module.exports = auth;