const clientsService = require("../services/clientsService");
const catchAsync = require("../utils/catchAsync");
const { twilioConfig } = require("../config/dbConfig");

// Configurar Twilio
const clientRequestMessage = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);

const createInvitationsClient = async (req, res) => {
    const { _id, event_type, theme, name, lastname, phone, date_start, date_end, __v } = req.body;
        
    try {
        const newClient = await clientsService.createInvitationsClient({_id, event_type, theme, name, lastname, phone, date_start, date_end, __v});
                
        try {
            // Enviar notificación por WhatsApp
            const message = await clientRequestMessage.messages.create({
                body: `Llegó una nueva solicitud en EPA INVITACIONES para el día ${date_start}. Cliente: ${name} ${lastname}, TELÉFONO: ${phone}. \n ID: ${_id}`,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+5493816376266'
            });

            console.log(`Mensaje enviado: ${message.sid}`);
            res.status(201).json(newClient);
            
        } catch (twilioError) {
            console.error('Error al enviar el mensaje de WhatsApp:', twilioError);
            res.status(500).json({ error: 'Error al enviar el mensaje de WhatsApp' });
        }

    } catch (error) {
        if (error.code === 11000 && error.keyPattern._id === 1) {
            // Extraer el _id del error
            const duplicatedId = error.keyValue._id;
            // Notificar al usuario que ya existe un documento con ese _id
            res.status(400).json({ error: `Ya existe un cliente con el ID ${duplicatedId}` });
        } else {
            console.error('Error al crear el cliente:', error);
            res.status(500).json({ error: 'Error al crear el cliente' });
        }
    }
};

module.exports = {
    createInvitationsClient: catchAsync(createInvitationsClient),
};

