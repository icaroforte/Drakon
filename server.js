var express = require('express');
var app = express();
//Morgan é um logger para node
var morgan = require('morgan');
//Esoolhendo a porta (process.env.PORT é usado por sites de deploy)
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

var path = require('path');

//configuração do express
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

//http://localhost:8080/api/users
//http://localhost:8080/api/autenticar
//http://localhost:8080/api/me
//http://localhost:8080/api/entorpecentes
//http://localhost:8080/api/entorpecente

//colocar '/api' é uma maneira de diferenciar rotas do backend e frontend
app.use('/api', appRoutes);


//conectando banco de dados
//require('./config/database.js')('mongodb://testeapp:vqqe88@ds113815.mlab.com:13815/appteste');
require('./config/database.js')('mongodb://localhost:27017/teste');

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//iniciando o servidor
app.listen(port, function() {
  console.log('Servidor rodando na porta: '+ port );
});
