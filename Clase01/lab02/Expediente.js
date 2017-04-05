 NRO_EXPEDIENTE = 1000;

function Expediente(pTipo,pTitulo,pFechaInicio,pPrioridad,pIniciador){
    var localFecha = moment(pFechaInicio,"DD/MM/YYYY");
    this.esInvalido = !localFecha.isValid();
    this.tipo=pTipo;
    this.titulo=pTitulo;
    this.prioridad=pPrioridad;
    this.iniciador=pIniciador;
    this.numero= NRO_EXPEDIENTE++;
    this.enArchivo=false;
    this.listaPases=[];
    this.fechaInicio = (localFecha.isValid())?localFecha.toDate():undefined;
    if(this.esInvalido){
        console.error("Fecha no válida");
    }
    
}

Expediente.prototype.ficha = function(){
    console.log(this);
}

Expediente.prototype.archivar = function(){
    this.enArchivo=true;
    // pasar Expte para desvincularlo del área
    if(this.listaPases.length > 0)
            this.listaPases[this.listaPases.length -1].area.pasarExpte(this);
}

Expediente.prototype.pasar = function(pFojas,pArea){
    if(this.enArchivo){
        console.error("El Expediente "+this.numero+" no se puede pasar porque está archivado.");
    }else{
        // pasar Expte
        if(this.listaPases.length > 0)
            this.listaPases[this.listaPases.length -1].area.pasarExpte(this);
        // crear nuevo Expte
        var pase = new Pase(pFojas,pArea,this);
        this.listaPases.push(pase);
        // Area receptora de destino
        pArea.recibirExpte(this);
    }   
}

Expediente.prototype.pases=function(){
    console.log(this.listaPases);
}

Expediente.prototype.fichaDetallada=function(){
    var tam=this.listaPases.length - 1;
    var pase=this.listaPases[tam];
    this.ficha();
    console.log("Area: "+pase.area.nombre+". Fecha de arribo: "+moment(pase.fecha).format("DD/MM/YYYY"));
}