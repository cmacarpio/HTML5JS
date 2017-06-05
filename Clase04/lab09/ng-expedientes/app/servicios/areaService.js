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
    })
    .factory("areaServiceREST",function($http,$q) {  
        var servicioRest = {};    
        var deferred = $q.defer();    // agregar al objeto metodos de negocio  
        // agregar método para hacer un POST rest  
        servicioRest.agregarArea = function(unArea){   
            $http.post("http://localhost:3000/areas",unArea).then(    
                function(result){     
                    deferred.resolve(result);    
                },    function(e){     
                    deferred.reject("ERROR");         
                    console.error("ERROR ")    
                });   
            return deferred.promise;  
        }  // retornar el objeto servicio construido  
        return servicioRest; 
    });