
angular.module('blockController', [])
    .controller('blockController', function($scope, Buildings, UserGoogle, Charts) {

        Buildings.get()
            .success(function(data) {
                $scope.buildings = data;
                $scope.buildingselected = data[0];
            });
        UserGoogle.get()
            .success(function(data) {
                $scope.google_user = data;
            });
        Charts.get()
            .success(function(data) {
                $scope.charts = data;
                $scope.chartselected = data[0];
            });
    });