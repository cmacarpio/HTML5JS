const name = 'localhost';
const port = '3000';

var http = require('http');
var server = http.createServer(function(request,res){
    console.log("request starting...");
    var msg = "¡Hola mundo!";
    res.writeHead(200, {'Content-Length': Buffer.byteLength(msg, 'utf8'),"Content-Type": "text/plain"});
    res.write(msg,'utf8');
    res.end();
});
server.listen(port);
console.log('Server '+name+' is listening on port '+port+'\nhttp://localhost:3000/');
