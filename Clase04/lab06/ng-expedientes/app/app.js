angular.module("appExpedientes",["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when("/area",{templateUrl:"views/datosArea.html"})
                    .when("/area/lista",{templateUrl:"views/listaAreas.html"});
    })
    .controller("areaController",function($scope){
        $scope.titulo = "Gestión de Areas";
        $scope.listaAreas = [{"nombre":"Un Area"},{"nombre":"Salud e higiene"}]; //Aárea de prueva {"nombre":"Un Area"}
        $scope.area = undefined; 
        $scope.isEditing=false;   
        $scope.cxtInfo=0;
        $scope.msg="";     
        
        $scope.cancelar = function(){     
            $scope.area=undefined;
            $scope.isEditing=!$scope.isEditing;
            $scope.cxtInfo=0;
            $scope.msg="";
        }
        $scope.editar = function(unArea){
            $scope.isEditing=true;   
            $scope.area=unArea;
            $scope.cxtInfo=0;
            $scope.msg="";
        } 
        $scope.guardar = function(){
            /* console.log($scope.area);
            for(i=0;i<$scope.listaAreas.length;i++){
                console.log($scope.listaAreas[i]);
            }*/
            if( $scope.listaAreas.indexOf($scope.area) < 0){
                if($scope.area.nombre){
                    $scope.listaAreas.push($scope.area); 
                    $scope.cxtInfo=1;
                    $scope.msg="Operación de inserción exitosa.";
                    $scope.area=undefined;
                    $scope.isEditing=!$scope.isEditing;
                }else{
                    $scope.cxtInfo=2;
                    $scope.msg="Operación de inserción fallida, debe especificar un nombre.";
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
            var idx = $scope.listaAreas.indexOf(unArea);
            if( idx >= 0 && confirm("¿Desea borrar el área: "+unArea.nombre+"?")){
                $scope.listaAreas.splice(idx,1);
            }
            $scope.isEditing=false;
            $scope.cxtInfo=0;
            $scope.msg="";
        }
    
});
