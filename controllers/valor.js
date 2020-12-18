'use strict';
 
const Valor = require('../models/valor')

    
    async function valor(req, res){
        try{
    
            let valorId = req.params.valorId
            await Valor.findById(valorId)
            res.status(200).send(valorId)
            console.log(valorId)

        }catch(e){

        }
    
    }
  async function valores(req, res){

      try {
                    const valores = await Valor.find();
                    const data = {
                        title: 'Valores',
                        valores
                    };
                    res.status(200).send(data);
                } catch (e){
                        
                }
    }
    async function postValor(req, res) {
        try {
            const valor = req.body
            const newValor = new Valor({
                valor: valor.valor
            })
            await newValor.save()
            res.status(200).send('ok')
        
        } catch (e) {}
    }
    async function updateValores(req, res){
        
        try{
            const valorId = req.params.valorId
            const update = req.body
        
        await Valor.findByIdAndUpdate(valorId, update)
        res.status(200).send('actualizado')
        
    } catch (e){}
    }
    
    async function borrar(req, res){
    try{
        let valorId = req.params.valorId
        await Valor.findById(valorId)
        await Valor.remove()
        res.status(200).send('borrado')
        
    }catch(e){
        
    }
    }

    
    module.exports = {
        valor,
        valores,
        postValor,
        updateValores,
        borrar,
    }

// class Usuarios{

//     constructor(){
//         this.users();
//     }
//    users(req, res){
        
//             const us = User.find();
//                                 const data = {
//                                     title: 'Users',
//                                     us
//                                 };
//                                 //  res.status(200).send(us);
//                                  console.log(data);
        
    
//                             }
                        
                    
                        
//                         }
//                      var u= new Usuarios()
//                     //  module.exports= {
//                     //          Usuarios
//                     //      };