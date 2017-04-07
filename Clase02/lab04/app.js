angular.module("lab04",[ ]).controller("sumador",
    function($scope){ 
        $scope.result = 1 + 3 ; 
    }).controller("restador",
    function($scope){
        $scope.resta = 3-1;
    });