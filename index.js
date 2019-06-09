const express = require('express')
const app = express()
const server = app.listen(3000, () => console.log('running on port 3000'))

app.use(express.static('./client/dist'))

app.get('*', (req, res) => {
    res.sendFile('./client/dist/index.html')
})

const io = require('socket.io')(server)
var numPlayers = 0
var numClicks = 0

io.on('connection', (socket) => {
    numPlayers++
    socket.broadcast.emit('new-player', numPlayers)
    socket.emit('new-player', numPlayers)
    socket.emit('update-clicks', numClicks)

    socket.on('broadcast-bork', () => {
        numClicks++
        socket.broadcast.emit('update-clicks', numClicks)
        socket.emit('update-clicks', numClicks)

        socket.broadcast.emit('bork')
    })

    socket.on('disconnect', () => {
        numPlayers--
        socket.broadcast.emit('new-player', numPlayers)
        socket.emit('new-player', numPlayers)

    })
})



