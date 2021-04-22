        var socket = io()

        socket.on('connect', function(){
            console.log('Conectado al servidor');
        })

        socket.on('disconnect', function(){
            console.log('Se ha desconectado del servidor');
        })

        socket.emit('enviarMensaje', {
            usuario: 'Chino',
            mensaje: 'Hello world'
        }, function(resp){
            console.log('Respuesta server: ', resp);
        })

        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor', mensaje);
        })