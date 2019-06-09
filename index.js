const express = require('express')
const app = express()
const server = app.listen(3000, () => console.log('running on port 3000'))

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    socket.on('broadcast-bork', () => {
        socket.broadcast.emit('bork')
    })
})


