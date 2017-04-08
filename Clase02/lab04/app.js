angular.module("lab04",[]).controller("sumador",
    function($scope){ 
        $scope.result = 1 + 3 ; 
        $scope.mitadValor = $scope.result / 2;
        $scope.par = (Math.floor($scope.result) % 2) == 0;
        $scope.indice = 1;    
        $scope.historial = [{valor:$scope.mitadValor, indice: $scope.indice}]; 

        $scope.randomIncrement=function(){
            $scope.result+=Math.random();
            $scope.mitadValor = $scope.result / 2;
            $scope.par = (Math.floor($scope.result) % 2) == 0;
            $scope.indice++;
            $scope.historial.push({  valor: $scope.mitadValor,  indice: $scope.indice }); 
            console.log($scope.historial); 
        }
        

        
    }).controller("restador",
    function($scope){
        $scope.resta = 3-1;
    });