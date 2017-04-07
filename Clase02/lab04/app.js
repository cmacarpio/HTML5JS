angular.module("lab04",[]).controller("sumador",
    function($scope){ 
        $scope.result = 1 + 3 ; 
        $scope.mitadValor = $scope.result / 2;
        $scope.randomIncrement=function(){
            $scope.result+=Math.random();
            $scope.mitadValor = $scope.result / 2;
        }
    }).controller("restador",
    function($scope){
        $scope.resta = 3-1;
    });