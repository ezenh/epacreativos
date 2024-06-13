const mongoose = require("mongoose")

const validateInvitationsClientId = (req, res, next) => {
    const {id} = req.params
    if(mongoose.Types.ObjectId.isValid(id)) {
        next()
    }else{
        next({message: "Id inválido", statusCode: 400})
    }
}

const validateInvitationsClient = (req, res, next) => {
    const { event_type, theme, name, lastname, phone, date_start, date_end } = req.body;

    let errorMessage = '';

    // Utilizamos un switch para verificar cada campo individualmente
    switch (true) {
        case !event_type:
            errorMessage = 'Falta el tipo de evento';
            break;
        case !theme:
            errorMessage = 'Falta el modelo de diseño';
            break;
        case !name:
            errorMessage = 'Falta el nombre';
            break;
        case !lastname:
            errorMessage = 'Falta el apellido';
            break;
        case !phone:
            errorMessage = 'Falta el telefono';
            break;
        case !date_start:
            errorMessage = 'Falta la fecha de inicio';
            break;
        case !date_end:
            errorMessage = 'Falta ela fecha de finalizacion';
            break;
        // case !isValidYear(phone):
        //     errorMessage = 'El año de la película no es válido';
        //     break;
        default:
            // Si todos los campos están presentes y el año es válido, continuar con el siguiente middleware
            next();
            return;
    }

    // Si algún campo falta o es inválido, devolver un error 400 con el mensaje correspondiente
    console.log(`Error: ${errorMessage}`);
    return res.status(400).json({ error: errorMessage });
};

// Función auxiliar para validar que el año sea un número de 4 dígitos
// const isValidYear = (phone) => {
//     return /^\d{4}$/.test(year);
// };

module.exports = {validateInvitationsClient, validateInvitationsClientId};