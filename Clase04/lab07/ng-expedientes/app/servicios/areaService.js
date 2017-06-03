angular.module("appExpedientes")
    .service("areaService",function(){
        this.areas=[{"nombre":"Un Area"},{"nombre":"Salud e higiene"}];//[];
        this.addArea = function(unArea){
            console.log('Se agregará un área :'+unArea.nombre);
            this.areas.push(unArea);
        }
        this.listarAreas = function(){
            return this.areas;
        }
        this.borrarArea = function(idx){
            console.log('Se borrará el elemento en la posición :'+idx);
            this.areas.splice(idx,1);
        }
    });