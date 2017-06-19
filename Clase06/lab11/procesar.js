var url = require('url');
module.exports.procesarURL =  function procesarURL(req, res, next) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	req.op1=query.op1;
	req.op2=query.op2;
	res.write("<html><head><title>Calculadora NodeJS</title></head><body>");	
	next();//completar para que siga procesando
}