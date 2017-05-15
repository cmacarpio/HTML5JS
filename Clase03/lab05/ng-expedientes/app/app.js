angular.module("appExpedientes",[])
    .controller("areaController",function($scope){
        $scope.titulo = "Gestión de Areas";
        $scope.listaAreas = []; //Aárea de prueva {"nombre":"Un Area"}
        $scope.area = undefined; 
        $scope.isEditing=false;        
        
        $scope.cancelar = function(){     
            $scope.area=undefined;
            $scope.isEditing=!$scope.isEditing;
        }
        $scope.editar = function(unArea){
            $scope.isEditing=true;   
            $scope.area=unArea; 
        } 
        $scope.guardar = function(){
            if( $scope.listaAreas.indexOf($scope.area) < 0){    
                $scope.listaAreas.push($scope.area);   
            }else if($scope.area!=={} && $scope.area.nombre && $scope.isEditing){
                //Edition
            }else{        
                $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";  
            }
            $scope.area={};
            $scope.isEditing=!$scope.isEditing;
        } 

        $scope.nueva = function(){
            $scope.area={};
            $scope.isEditing=!$scope.isEditing;
        }
        $scope.borrar = function(unArea){
            var idx = $scope.listaAreas.indexOf(unArea);
            if( idx >= 0){
                $scope.listaAreas.splice(idx,1);
            }
            $scope.isEditing=false;
        }
    
});
