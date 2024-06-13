const { Router } = require("express");
const invitationsRouter = require("./invitationsRouter");
const restaurantsRouter = require("./restaurantsRouter");
const websRouter = require("./websRouter");

const clientRouter = Router();

// Usar subrouters para cada tipo de cliente
clientRouter.use("/invitations", invitationsRouter);
clientRouter.use("/restaurants", restaurantsRouter);
clientRouter.use("/webs", websRouter);

module.exports = clientRouter;
