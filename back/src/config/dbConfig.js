require("dotenv").config()
const mongoose = require ("mongoose")

const dbConfig = async () => {
    //realizar la conexion con la base de datos
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conectado a la base de datos');
    } 
    catch (error) {
    console.error('Error conectando a la base de datos:', error);
    }
}

const twilioConfig = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    };

module.exports = { dbConfig, twilioConfig }