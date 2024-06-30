const { Router } = require("express");
const restaurantsController = require("../controllers/restaurantsController.js");
const { validateRestaurantsClient, validateRestaurantsClientId } = require("../middlewares/validateRestaurantsClient.js");

const restaurantsRouter = Router();

// Ruta para crear un cliente de restaurantes
restaurantsRouter.post("/", validateRestaurantsClient, restaurantsController.createRestaurantsClient);

module.exports = restaurantsRouter;
