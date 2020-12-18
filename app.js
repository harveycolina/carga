'use strict'
const express = require('express')
const bodyParser = require('body-parser') 
const app = express()

//importacion de rutas 
const user = require('./routes/user')
const va = require('./routes/valor')


//middelwares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//carga de rutas 
app.use('/api', user)

app.use('/api', va)

module.exports = app