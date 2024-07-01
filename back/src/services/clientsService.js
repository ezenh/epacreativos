const InvitationsClient = require("../models/invitation");
const RestaurantsClient = require("../models/RestaurantsClient");
const WebsClient = require("../models/WebsClient");

module.exports = {
    // Servicio para crear un cliente de invitaciones
    createInvitationsClient: async (clientData) => {
        return await InvitationsClient.create(clientData);
    },
    
    // Servicio para obtener un cliente de invitaciones por ID
    getInvitationsClientById: async (id) => {
        return await InvitationsClient.findById(id);
    },
    
    // Servicio para crear un cliente de restaurantes
    createRestaurantsClient: async (clientData) => {
        return await RestaurantsClient.create(clientData);
    },
    
    // Servicio para obtener un cliente de restaurantes por ID
    getRestaurantsClientById: async (id) => {
        return await RestaurantsClient.findById(id);
    },
    
    // Servicio para crear un cliente de webs
    createWebsClient: async (clientData) => {
        return await WebsClient.create(clientData);
    },
    
    // Servicio para obtener un cliente de webs por ID
    getWebsClientById: async (id) => {
        return await WebsClient.findById(id);
    }
};
