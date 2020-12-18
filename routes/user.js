'use strict'
const express = require('express');
const classUsuarios = require('../controllers/user'); /*mediante class*/ 

const api = express.Router();


 api.get('/users',classUsuarios('users'));  

// api.get('/user/:userId', ctr.user)
// api.post('/userInsert', ctr.postUser)
// api.put('/user/:userId',  ctr.updateUser)
// api.delete('/user/:userId', ctr.borrar)


module.exports = api