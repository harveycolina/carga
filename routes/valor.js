'use strict'
const express = require('express')
const valorCtr = require('../controllers/valor')

const api = express.Router()


api.get('/valores', valorCtr.valores)
api.get('/valor/:valorId', valorCtr.valor)
api.post('/postValor', valorCtr.postValor)
api.put('/updateValor/:valorId',  valorCtr.updateValores)
api.delete('/borrar/:valorId', valorCtr.borrar)

module.exports = api


