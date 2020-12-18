const app = require('./app')    
const mongoose = require('mongoose')
const config = require('./config/config')    

const optiosMongoDb = {'useCreateIndex': true, useNewUrlParser: true, useUnifiedTopology: true };

class Server{

    constructor (){
        this.set();
        this.connect();
            }
    
    connect(){    
        mongoose.connect(config.db, optiosMongoDb,(err, res)=>{
            if (!err){
                
            console.log('conexion establecida')
        }else{
            console.log(`error de conections ${err}`)
        }
        app.listen(config.port, ()=>{
                console.log(`conectado al puerto ${config.port}`)
            } )
            })
        }

    set(){
        mongoose.set('useFindAndModify', false);
        } 

}
const server = new Server(); 
