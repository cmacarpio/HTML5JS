const name = 'localhost';
const port = '3000';

var http = require('http');
var server = http.createServer(function(request,res){
    console.log("request starting...");
    var msg = "<p>Hola cliente</p>\n";
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(msg,'utf8');
    console.log(request.url);
    res.write("<p>URL: "+request.url+"</p>");
    res.end();
});
server.listen(port);
console.log('Server '+name+' is listening on port '+port+'\nhttp://'+name+':'+port+'/');
//Test -> http://localhost:3000/miapp/unaUrl?param1=123456