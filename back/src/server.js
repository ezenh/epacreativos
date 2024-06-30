// Importar módulos necesarios
const express = require("express")
const router = require("./routes/router.js")
const morgan = require ("morgan")
const cors = require("cors")

// Configurar servidor Express
const app = express()

// Middleware para logs de peticiones
app.use(morgan("dev"))

// Middleware para permitir CORS
app.use(cors({
    origin: '*',  // Permite solicitudes desde cualquier origen
    methods: 'GET,POST,PUT,DELETE',  // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization'  // Encabezados permitidos
  }));
// Middleware para analizar solicitudes JSON
app.use(express.json())

// Rutas principales
app.use(router)

// Manejador de errores
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({error: err.message})
})

// Exportar la aplicación Express
module.exports = app