angular.module("appExpedientes",['ngResource','ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when("/area",{templateUrl:"views/datosArea.html",controller:"areaController"})                    
                    .when("/area/lista",{templateUrl:"views/listaAreas.html",controller:"listaAreaController"})
                    .when("/area/:idArea",{templateUrl:"views/datosArea.html",controller:"areaController"})
                    .otherwise({redirectTo:"/area"});
    })
    .controller("listaAreaController",function($scope,$location,areaServiceREST){       
        $scope.listaAreas = [];
        
        $scope.goNext = function (hash) { 
            $location.path(hash);
        }
        $scope.i=0;
        // GIT update

        areaServiceREST.listarAreas().then(
                function(lista){
                    $scope.listaAreas = lista;
                },function(error){
                    console.error(error);
        });
        
        
        //angular.copy(listarAreas(),$scope.listaAreas);
        //$scope.listaAreas = listarAreas();
        //sconsole.log($scope.listaAreas);
          
        
        $scope.borrar = function(unArea){
            if( unArea.id >= 0 && confirm("¿Desea borrar el área: "+unArea.nombre+"?")){
                areaServiceREST.borrarArea(unArea.id).then(
                    function(res){                        
                        areaServiceREST.listarAreas().then(
                            function(lista){                                            
                                $scope.listaAreas = lista;                
                            },
                            function(error){
                                console.error(error);
                            }
                        );
                    },
                    function(err){
                        $scope.msg="Operación de eliminación fallida.";
                    }
                );                
            }
        }
    })
    .controller("areaController",function($scope,$routeParams,$resource,areaServiceREST){
        $scope.titulo = "Carga de áreas";
        var area2edit = $resource('http://localhost:3000/areas/:idArea',{idArea:'@id'});
        //$scope.listaAreas = areaService.listarAreas();
        //[{"nombre":"Un Area"},{"nombre":"Salud e higiene"}]; //Aárea de prueva {"nombre":"Un Area"}
        
        //console.log($scope.listaAreas);
            
        if($routeParams.idArea){
            /*areaServiceREST.buscarPorID($routeParams.idArea).then(
                function(result){
                    console.log(result);
                    $scope.area=result;
                    $scope.isEditing=true;
                }
            )*/
            area2edit.get({idArea:$routeParams.idArea},function(area){
                $scope.area = area;
                $scope.isEditing=true;
            });
        }else{
            $scope.area = undefined; 
            $scope.isEditing=false;   
            $scope.cxtInfo=0;
            $scope.msg="";
        }
        
        $scope.cancelar = function(){     
            $scope.area=undefined;
            $scope.isEditing=!$scope.isEditing;
            $scope.cxtInfo=0;
            $scope.msg="";
        }
        /*
        $scope.editar = function(unArea){
            $scope.isEditing=true;   
            $scope.area=unArea;
            $scope.cxtInfo=0;
            $scope.msg="";
        } */
        $scope.guardar = function(){           
            //if( $scope.listaAreas.indexOf($scope.area) < 0){            
            if(!$scope.area.id){
                if($scope.area.nombre){
                    //$scope.listaAreas.push($scope.area); 
                    //areaService.addArea($scope.area);
                    //$scope.area.id=undefined;
                    console.log($scope.area.id);
                    areaServiceREST.agregarArea($scope.area)
                        .then(
                            function(resultado){
                                $scope.msg="Operación de inserción exitosa.";     
                                     
                            },
                            function(error){
                                $scope.msg="Operación de inserción fallida, debe especificar un nombre.";
                            }
                        );
                    $scope.cxtInfo=1;
                    //$scope.msg="Operación de inserción exitosa.";
                    $scope.area=undefined;
                    $scope.isEditing=!$scope.isEditing;
                }else{
                    $scope.cxtInfo=2;
                    //$scope.msg="Operación de inserción fallida, debe especificar un nombre.";
                } 
            }else if($scope.area.nombre && $scope.isEditing){
                //Edition
                areaServiceREST.modificarArea($scope.area);
                $scope.cxtInfo=1;
                $scope.msg="La operación de edición fue exitosa.";
                $scope.area=undefined;
                $scope.isEditing=!$scope.isEditing;
            }else{        
                $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";  
                $scope.area=undefined;
                $scope.isEditing=!$scope.isEditing;
            }
            
        } 

        $scope.nueva = function(){
            $scope.area={};
            $scope.isEditing=!$scope.isEditing;
            $scope.cxtInfo=0;
            $scope.msg="";
            console.log($scope.area);
        }
            
});
