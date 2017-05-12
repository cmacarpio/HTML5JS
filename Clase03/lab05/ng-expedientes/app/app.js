angular.module("appExpedientes",[])
    .controller("areaController",function($scope){
        $scope.titulo = "Gestión de Areas";
        $scope.listaAreas = [{"nombre":"Un Area"}]; 
        $scope.area = undefined; 
        $scope.isEditing=false;        
        
        $scope.cancelar = function(){     
            console.log('Cancelar click!');
            $scope.area=undefined;
            $scope.isEditing=!$scope.isEditing;
            console.log("Cancelar "+$scope.isEditing);
        }
        $scope.editar = function(unArea){
            console.log('Editar click!');
            $scope.isEditing=true;   
            $scope.area=unArea; 
            console.log("Editar "+$scope.isEditing);
        } 
        $scope.guardar = function(){
            console.log('Guardar click!');
            if($scope.area && $scope.area.nombre && !$scope.isEditing){       
                $scope.listaAreas.push($scope.area);  
            }else if($scope.area && $scope.area.nombre && $scope.isEditing){
                //Edition
                alert('Hay que guardar los cambios');
            }else{        
                $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";  
            }
            $scope.area={};
            $scope.isEditing=!$scope.isEditing;
            console.log("Guardar "+$scope.isEditing);
        } 

        $scope.nueva = function(){
            console.log('Nueva click!');
            $scope.area={};
            $scope.isEditing=!$scope.isEditing;
            console.log("Nueva "+$scope.isEditing);
        }
        $scope.borrar = function(unArea){
            console.log('Borrar click!');
            $scope.isEditing=false;
            console.log("Borrar "+$scope.isEditing);
        }
    
});
