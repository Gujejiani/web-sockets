// core node module
const http = require('http');

// ws is third party module
const websocket = require('ws');



 const server = http.createServer((req, res) => {
    res.end('I am connected');
 });

 const wss = new websocket.WebSocketServer({ server });

 // before handshake
 wss.on('headers', (headers, req) => {
    console.log(headers);
 });

 // after handshake
 wss.on('connection', (ws, req) => {
   console.log('New connection');
   ws.on('message', (msg) => {
    console.log(msg.toString());
 })
   ws.send('Welcome to the websocket server');
  
 });

 server.listen(9000);