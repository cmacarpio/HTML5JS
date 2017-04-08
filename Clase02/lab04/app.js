angular.module("lab04",[]).controller("sumador",
    function($scope){ 
        $scope.result = 1 + 3 ; 
        $scope.mitadValor = $scope.result / 2;
        $scope.par = (Math.floor($scope.result) % 2) == 0;

        $scope.randomIncrement=function(){
            $scope.result+=Math.random();
            $scope.mitadValor = $scope.result / 2;
            $scope.par = (Math.floor($scope.result) % 2) == 0;
        }
        

        
    }).controller("restador",
    function($scope){
        $scope.resta = 3-1;
    });