'use srtict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const furgon = 35
// const carreta = 45
// const mediaC = 30
// const mediaC2 = 25
// const paleta = 20
// const paleta2 = 30


const ValorSchema = Schema({
    valor:String,

})

module.exports = mongoose.model('Valor', ValorSchema)