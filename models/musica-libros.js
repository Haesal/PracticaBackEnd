const mongoose = require('mongoose')

// Definicion de Schema
const ElementSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo_elemento: {
        type: String,
        enum: {
            values: ['Libro','Cancion'],
            message: '{VALUE} is not an available option' //422
         },
        required: true
    },
    nombre_elemento: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: String,
        required: true
    },
    editorial: {
        type: String
    },
    casa_productora: {
        type: String
    }
}, {collection: 'element'})

// Compilacion de modelo a partir del esquema
module.exports = mongoose.model('element', ElementSchema)