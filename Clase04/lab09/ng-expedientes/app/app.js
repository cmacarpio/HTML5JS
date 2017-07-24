angular.module("appExpedientes",['ngResource','ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when("/area",{templateUrl:"views/datosArea.html",controller:"areaController"})                    
                    .when("/area/lista",{templateUrl:"views/listaAreas.html",controller:"listaAreaController"})
                    .when("/area/:idArea",{templateUrl:"views/datosArea.html",controller:"areaController"})
                    .otherwise({redirectTo:"/area"});
    })
    .controller("listaAreaController",function($scope,$location,areaServiceREST){       
        $scope.listaAreas = [];//areaServiceREST.lista; //areaService.listarAreas();
        $scope.areas_db=[];
        $scope.goNext = function (hash) { 
            $location.path(hash);
        }

        $scope.i=0;
        $scope.$watchCollection(
            "areas_db",
            function(newV,oldV){
                //console.log(newV);
                angular.copy(newV,$scope.listaAreas);
            }
        );
        
        areaServiceREST.listarAreas().then(
            function(lista){
                console.log("app.js - Exito de la promesa:");
                console.log(lista);
                /*
                $scope.$watchCollection('listaAreas', function(newNames, oldNames) {
                    $scope.listaAreas = lista;
                });
                */
                //$scope.listaAreas.length = $scope.listaAreas.length + 1;
                //$scope.listaAreas = lista;
                //angular.extend($scope.listaAreas,lista);
                //angular.copy(lista,$scope.areas_db);
                angular.copy(lista,$scope.listaAreas);
                //$scope.$watch;
                //$scope.$apply();
                //vm.lista = lista;
                //angular.copy(lista,vm.lista);
                //console.log(vm.lista);    
                //$scope.i=$scope.i+1;    
                //$scope.f=new Date().getTime();
                //$scope.$digest();
                //lista=undefined;
            },
            function(error){
                console.error(error);
            }
        );
            
        
        //var vm = this;
        //vm.lista = [];//areaServiceREST.areas;
        /*
        areaServiceREST.listarAreas(function(lista){
            $scope.listaAreas = lista;
        });*/
        /*areaServiceREST.listarAreas(function(lista){
            $scope.listaAreas=lista;
        });*/
        /*
        vm.getLista = function(){
            areaServiceREST.listarAreas().then(
                function(lista){
                    //console.log(lista);
                    //$scope.listaAreas = lista;
                    //$scope.$apply();
                    //vm.lista = lista;
                    //angular.copy(lista,vm.lista);
                    console.log("app.js - Exito de la promesa:");
                    //console.log(vm.lista);    
                    $scope.i=$scope.i+1;    
                    $scope.f=new Date().getTime();
                },
                function(error){
                    console.log(error);
                }
            );
        }*/
        
        
        //vm.getLista();
       
        //console.log($scope.listaAreas);
    })
    .controller("areaController",function($scope,$routeParams,$resource,areaServiceREST){
        $scope.titulo = "Gestión de Areas";
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
        $scope.borrar = function(unArea){
            //var idx = $scope.listaAreas.indexOf(unArea);
            var idx = unArea.id;            
            if( idx >= 0 && confirm("¿Desea borrar el área: "+unArea.nombre+"?")){
                //$scope.listaAreas.splice(idx,1);
                //areaService.borrarArea(idx);                
                areaServiceREST.buscarPorID(idx).then(
                    function(res){
                        console.log("Lo que viene del servido REST");
                        console.log(res);                                                
                        //$scope.area = res;                    
                        $scope.msg="Operación de eliminación exitosa.";
                    },
                    function(err){
                        $scope.msg="Operación de eliminación fallida.";
                    }
                );                
            }
            $scope.isEditing=false;
            $scope.cxtInfo=0;
            $scope.msg="";
        }
    
});
