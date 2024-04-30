const mongoose = require ('mongoose')

const esquemadelusuario = mongoose.Schema({
    nombre: {
        type: String,
        require:true
    },
    gmail: {
        type: String,
        require: true
    },
    prenda_que_compra: {
        type: String,
        require: true
    },
    marca:{
        type:String,
        require:true
    },
    cantidad:{
        type: String,
        require:true
    },
    total:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        requireu:true
    }

})
 module.exports = mongoose.model('usuario',esquemadelusuario)