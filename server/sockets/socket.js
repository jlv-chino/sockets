const {io} = require('../server')

io.on('connection', (client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la App'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (data, callback)=>{

        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
        
        /*if(mensaje.usuario){
            callback({
                resp: 'Todo salió perfecto'
            })
        }else{
            callback({
                resp: 'Todo salió mal'
            })
        }*/
        
    })

})