var app = angular.module("doudou", []);

app.controller('imgList', function ($scope, $http) {
    $http.get("mock/imgList.json")
         .then(function (response) {
             $scope.imgList = response.data;
             $scope.current = response.data[0];
             $scope.current.active = true;
         });
    $scope.change = function ($item) {
        $scope.current = $item;

        angular.forEach($scope.imgList, function (value, key) {
            value.active = false;
        });

        $scope.current.active = true;
    };
});

app.controller('/admin/img/upload', function ($scope, $http) {

});
