const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const path = require('path')

const app = express()
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

let io = socketIO(server)

io.on('connection', (client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la App'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (mensaje, callback)=>{
        
        if(mensaje.usuario){
            callback({
                resp: 'Todo salió perfecto'
            })
        }else{
            callback({
                resp: 'Todo salió mal'
            })
        }
        
    })

})

server.listen(port, (err) => {

    if (err) throw new Error(err)

    console.log(`Servidor corriendo en puerto ${ port }`)

})