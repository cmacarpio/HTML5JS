var connect = require('connect');
var parserURL = require('./procesar');
var calculadora = require('./calculadora');
connect()
 .use("/operacion",parserURL.procesarURL)
 .use("/operacion/sumar",calculadora.sumar)
 .use("/operacion/restar",calculadora.restar)
 .use("/operacion/multiplicar",calculadora.multiplicar)
 .use("/",function (req, res) {
			console.log(req.resultado);
		if(req.resultado){
			res.write("<h1>Resultado. </h1>: "+ req.resultado+"</body></html>");
			res.end();
		}else{
			res.end("<html><head></head><body>Operacion no coincide con las soliciitadas !!! </body></html>");
		}
 })
 .listen(8081);
