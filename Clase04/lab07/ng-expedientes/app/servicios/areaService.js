angular.module("appExpedientes")
    .service("areaService",function(){
        this.areas=[{"nombre":"Un Area"},{"nombre":"Salud e higiene"}];//[];
        this.addArea = function(unArea){
            this.areas.push(unArea);
        }
        this.listarAreas = function(){
            return this.areas;
        }
        this.borrarArea = function(idx){
            this.areas.splice(idx,1);
        }
    });