require('dotenv').load();

const http = require('http');
const path = require('path');
const express = require('express');
const tokenGenerator = require('./src/token_generator');
const hostName = '0.0.0.0';

// Create Express webapp
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  const identity = request.query.identity || 'identity';
  const room = request.query.room;
  response.send(tokenGenerator(identity, room));
console.log('Identity: '+ identity);
console.log('Room: '+ room);
});

// Create an http server and run it
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, hostName, function() {
  console.log('Twilio video server running on *:' + port);
});
