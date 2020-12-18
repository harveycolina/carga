'use strict';
 
const User = require('../models/user')

                    class Usuarios{

                        constructor(req, res){
                            this.req= req;
                            this.res= res;
                            }
                            
                    async users(){
                            
                        const us = await User.find();
                         const data = {
                            title: 'Users',
                            us
                           };
                            this.res.status(200).send(us);
                           }
                    
                           users(users= String) {
                            this[users];
                        }                       
                    }
                    
                     const classUsuarios = users => {
                         return (req, res, next)=>{
                             const us = new Usuarios();
                             us.users(users);
                         }
                     }
                    
                    module.exports = classUsuarios ;
                    

