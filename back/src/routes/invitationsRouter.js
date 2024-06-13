const { Router } = require("express");
const invitationsController = require("../controllers/invitationsController.js");
const { validateInvitationsClient, validateInvitationsClientId } = require("../middlewares/validateInvitationsClient.js");

const invitationsRouter = Router();

// Ruta para crear un cliente de invitaciones
invitationsRouter.post("/", validateInvitationsClient, invitationsController.createInvitationsClient);

module.exports = invitationsRouter;