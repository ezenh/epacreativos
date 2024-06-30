const { Router } = require("express");
const websController = require("../controllers/websController.js");
const { validateWebsClient, validateWebsClientId } = require("../middlewares/validateWebsClient.js");

const websRouter = Router();

// Ruta para crear un cliente de webs
websRouter.post("/", validateWebsClient, websController.createWebsClient);

module.exports = websRouter;
