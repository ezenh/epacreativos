// Importar módulos necesarios
const express = require("express");
const router = require("./routes/router.js");
const morgan = require("morgan");
const cors = require("cors");

// Configurar servidor Express
const app = express();

// Middleware para logs de peticiones
app.use(morgan("dev"));

// Middleware para permitir CORS
app.use(cors({
    origin: 'https://epacreativos.vercel.app', // Asegúrate de poner la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Rutas principales
app.use(router);

// Manejador de errores
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({error: err.message});
});

// Exportar la aplicación Express
module.exports = app;