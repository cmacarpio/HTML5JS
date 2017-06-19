var http = require('http');
var fs = require('fs');
const name = 'localhost';
const port = '3000';

function send404(response){
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404: Resource not found.");
    response.end();
}

var server = http.createServer(function(req,resp){
    if(req.method=='GET' && req.url=='/hola'){
        resp.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream('./public/hola.html').pipe(resp);        
    }else if(req.method=='GET' && req.url=='/docente'){
        resp.writeHead(200, {"Content-Type":"application/json"});
        fs.createReadStream('./public/objeto.json').pipe(resp);
    }else{
        send404(resp);
    }    
});

server.listen(port);
console.log('Server '+name+' is listening on port '+port+'\nhttp://'+name+':'+port+'/');