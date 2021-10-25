const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

//controllers
const leilaoController = require('./controller/leilaoController');

//socket
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});
  
require('./sockets/leilao')(io);

// configurações
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');


//rotas
app.get('/', leilaoController.inialPage);

http.listen(3000, () => console.log('servidor rodando na porta 3000'))