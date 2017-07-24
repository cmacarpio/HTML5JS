angular.module("appExpedientes")
    /*.service("areaService",function(areaServiceREST){
        //this.areas=[{"nombre":"Un Area"},{"nombre":"Salud e higiene"}];//[];
        this.areas = [];

        this.addArea = function(unArea){
            this.areas.push(unArea);
        }

        this.listarAreas = function(){
            areaServiceREST.listarAreas().then(
                function(lista){
                    this.areas = lista;
                },
                function(error){
                    console.log(error);
                }
            );
            return this.areas;
        }
        
        this.borrarArea = function(idx){
            this.areas.splice(idx,1);
        }
    })*/
    .factory("areaServiceREST",function($http,$q) {
        //var deferred = $q.defer();

        //interface  
        var servicioRest = {
            areas:[],
            agregarArea:agregarArea,
            listarAreas:listarAreas
        };    
        return servicioRest;


        //implementation        
        function agregarArea(unArea){  
            deferred = $q.defer(); 
            $http.post("http://localhost:3000/areas/",unArea).then(    
                function(result){ 
                    console.log("Post success - Agregar Area");    
                    deferred.resolve(result);    
                    //console.log("código después de insertar:...");                    
                },    function(e){     
                    deferred.reject("ERROR Post");         
                    console.error("ERROR ");    
                });
            return deferred.promise;  
        };  // retornar el objeto servicio construido  



        function listarAreas(){
            deferred = $q.defer();
            console.log("REST - listar Areas...");            
            $http.get("http://localhost:3000/areas").then(
                function(result){    
                    console.log("Post success - Listar Areas");
                    servicioRest.areas = result.data;  
                    console.log(result.data);              
                    deferred.resolve(result.data);
                },
                function(error){
                    deferred.reject("ERROR");         
                    console.error("ERROR ");
                }
            );
            return deferred.promise;
        };

        function buscarPorID(id){
            $http.get("http://localhost:3000/areas/"+id).then(
                function(result){
                    //console.log(result);
                    deferred.resolve(result.data);
                },
                function(error){
                    deferred.reject("ERROR");
                    console.log("ERROR");
                });
            return deferred.promise;
        }
    });