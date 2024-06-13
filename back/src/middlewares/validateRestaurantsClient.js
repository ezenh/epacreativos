const mongoose = require("mongoose")

const validateRestaurantsClientId = (req, res, next) => {
    const {id} = req.params
    if(mongoose.Types.ObjectId.isValid(id)) {
        next()
    }else{
        next({message: "Id inválido", statusCode: 400})
    }
}

const validateRestaurantsClient = (req, res, next) => {
    const { businessName, contactName, phone } = req.body;

    let errorMessage = '';

    // Utilizamos un switch para verificar cada campo individualmente
    switch (true) {
        case !businessName:
            errorMessage = 'Falta el nombre del negocio';
            break;
        case !contactName:
            errorMessage = 'Falta el nombre de la persona de contacto';
            break;
        case !phone:
            errorMessage = 'Falta el telefono';
            break;
        default:
            // Si todos los campos están presentes y el año es válido, continuar con el siguiente middleware
            next();
            return;
    }

    // Si algún campo falta o es inválido, devolver un error 400 con el mensaje correspondiente
    console.log(`Error: ${errorMessage}`);
    return res.status(400).json({ error: errorMessage });
};

module.exports = {validateRestaurantsClient, validateRestaurantsClientId};