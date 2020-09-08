const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) =>{ // it's an event, the socket is the client that is connected to the server
    socket.on('disconnect', () =>{
        console.log('id: ' + socket.id + ' se desconectou')
    })

    socket.on('msg', (data) =>{
        io.emit('showmsg', data)
        console.log(data)
    })
})


app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index')
})

http.listen(3000, () =>{
    console.log('Servidor aberto !')
})