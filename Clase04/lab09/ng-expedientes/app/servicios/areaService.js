angular.module("appExpedientes")
    .factory("areaServiceREST",function($http,$q) {
        //var deferred = $q.defer();

        //interface  
        var servicioRest = {
            areas:[],
            agregarArea:agregarArea,
            listarAreas:listarAreas,
            modificarArea:modificarArea,
            borrarArea:borrarArea
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

        function modificarArea(unArea){
            deferred = $q.defer();
            console.log(unArea);
            var data = $.param({nombre:unArea.nombre});
            $http.put("http://localhost:3000/areas/"+unArea.id,data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },}).then(
                function(result){
                    console.log("Put success - Modificar Area");
                    deferred.resolve(result);
                },
                function(result){
                    deferred.reject("ERROR Put");
                    console.error("ERROR en modificación");
                })
            return deferred.promise;
        };

        function borrarArea(id){
             deferred = $q.defer();
             $http.delete("http://localhost:3000/areas/"+id).then(
                    function(result){                        
                        deferred.resolve(result.data);
                    },
                    function(error){
                        deferred.reject("ERROR");
                        console.log("ERROR");
                    });
                return deferred.promise;
        };
        
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
            deferred = $q.defer();
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
        };
    });