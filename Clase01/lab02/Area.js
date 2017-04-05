function Area(pNombre){
	this.nombre=pNombre;
	this.empleados=[];
	this.expedientes = [];
}

Area.prototype.agregarEmpleado= function(emp){
	if(emp.area === undefined){
		this.empleados.push(emp);
		emp.asignarArea(this);
		console.log("empleado "+emp.nombre+" agregado al area exitosamente");
	}else{
		console.error("No se puede agregar un empleado que trabaja en otra área");
	}
}

Area.prototype.recibirExpte= function(e){	
	this.expedientes.push(e);
}

Area.prototype.pasarExpte= function(e){
	var i=this.expedientes.indexOf(e);
	this.expedientes.splice(i,1);	
}


Area.prototype.buscarExptePorTipo=function(tipoExpte){
	return this.expedientes.filter(function(e){
		return e.tipo.tipo == tipoExpte.tipo;
	})
}

Area.prototype.buscarExpteDormidos=function(dias){
	var limit = moment().subtract(dias,'days');
	return this.expedientes.filter(function(e){
		return limit.diff(e.fechaInicio) >= 0;
	})
}



/**
 * Función para imprimir resultados
 * @param {*} area : Area
 * @param {*} arr  : Lista de expedientes
 */

function printDetailedSummary(area,arr){
	var info="Area: ";
	if(area != null)
		info+=area.nombre+'\n';
	arr.forEach(function(a){
		info+="\n -> Expediente: "+a.numero+" - Tipo:"+a.tipo.tipo+", Prioridad: "+a.prioridad+", fecha Inicio: "+moment(a.fechaInicio).format("DD/MM/YYYY") +  "\n";
		a.listaPases.forEach(function(e){
			info+=" -- Pase por: "+e.area.nombre+" - fecha: "+moment(e.fecha).format("DD/MM/YYYY")+"\n";
		})
	})
	return info;
}
