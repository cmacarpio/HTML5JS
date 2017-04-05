function Empleado(pNombre,pMail,pClave,pCuit,pSueldo){
	this.nombre=pNombre;
	this.mail=pMail;
	this.password=pClave;
	this.cuit=pCuit;
	this.sueldo=pSueldo;
	this.area=undefined;
}

Empleado.prototype.asignarArea= function(pArea){
	this.area = pArea;
}

Empleado.prototype.trabajaEn= function(pArea){
	return this.area;
}

Empleado.prototype.iniciarExpediente= function(pExpediente,pAreaDestino){
	return this.area;
}
