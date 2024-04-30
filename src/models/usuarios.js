const mongoose = require ('mongoose')

const esquemadelusuario = mongoose.Schema({
    nombre: {
        type: String,
        require:true
    },
    edad: {
        type: Number,
        require: true
    },
    gmail: {
        type: String,
        require: true
    }
})
 module.exports = mongoose.model('usuario',esquemadelusuario)