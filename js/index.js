var app = angular.module("doudou", []);

app.controller('imgList', function($scope, $http) {
    $http.get("mock/imgList.json")
         .then(function(response) {
             $scope.imgList = response.data;
         });
});