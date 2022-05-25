const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8082});

const clients = new Set();

wss.on('connection', connection => {
    clients.add(connection);

    connection.on('message', message => {
        clients.forEach(el => el.send(`${message}`))
    });

    connection.on('close', () => {
    });
})

module.exports = wss;



