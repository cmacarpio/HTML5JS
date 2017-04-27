angular.module("appExpedientes",[])
    .controller("areaController",function($scope){
        $scope.titulo = "Gestión de Areas";
        $scope.listaAreas = []; 
        $scope.area = undefined; 
        
        $scope.cancelar = function(){     
            $scope.area=undefined; 
        $scope.editar = function(unArea){     
            $scope.area=unArea; 
        } 
        $scope.guardar = function(){  
            if($scope.area && $scope.area.nombre){       
                $scope.listaAreas.push($scope.area);  
            }else{        
                $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";  
            } 
        } 
    }
});
