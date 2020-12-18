const {Schema, model} = require('mongoose')

const TransporteSchema = new Schema({
    
    name:{type: String, required: true},
    tipo:{type: String, required: true},
    
    
})
module.exports = model('Transporte',TransporteSchema)