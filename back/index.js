const app = require("./src/server.js");
const { dbConfig } = require("./src/config/dbConfig");

dbConfig()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor escuchando en el puerto 3000");
        });
    })
    .catch(err => {
        console.log("Error al conectar la BDD", err);
    });