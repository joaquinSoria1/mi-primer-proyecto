const mongoose = require ('mongoose')

const esquemaderopa = mongoose.Schema({
    prenda:{
        type:String,
        require:true
    },
    marca: {
        type: String,
        require:true
    },
    cantidad: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    id:{
        type: Number,
        require:true
    },
    precio_por_unidad:{
        type: String,
        requiere:true
    }
})
 module.exports = mongoose.model('ropas',esquemaderopa)