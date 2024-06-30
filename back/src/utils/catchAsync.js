// FUNCION DE ORDEN SUPERIOR
// Hace que la funcion que usa, funcione mejor

const catchAsync = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch((err) => next(err))
    }
}

module.exports = catchAsync