module.exports.sumar =  function (req, res, next) {
	if (req.op1 && req.op2) {
		res.write("<h1>Operacion recibida. </h1><h2>Sumar: "+ req.op1+ " + "+req.op2+"</h2>");
		req.resultado = parseInt(req.op1)+ parseInt(req.op2);
		console.log("---->"+req.resultado);
		next();
	} else {
		res.end("Operacion no procesada !!! </body></html>");
	}
}

module.exports.restar =  function (req, res, next) {
	if (req.op1 && req.op2) {
		res.write("<h1>Operacion recibida. </h1><h2>Restar: "+ req.op1+ " - "+req.op2+"</h2>");
		req.resultado = parseInt(req.op1)- parseInt(req.op2);
		next();
	} else {
		res.end("Operacion no procesada !!! </body></html>");
	}
}


module.exports.multiplicar =  function (req, res, next) {
	if (req.op1 && req.op2) {
		res.write("<h1>Operacion recibida. </h1><h2>Multiplicar: "+ req.op1+ " * "+req.op2+"</h2>");
		req.resultado = parseInt(req.op1)* parseInt(req.op2);
		next();
	} else {
		res.end("Operacion no procesada !!! </body></html>");
	}
}