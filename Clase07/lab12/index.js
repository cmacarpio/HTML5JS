var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

var port = process.env.PORT || 4100;
var rutaAreas = require('./app/rutas/areas');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use('/api/areas',rutaAreas);

server.listen(port);
console.log("Servidor escuchando peticiones en el puerto: "+port);