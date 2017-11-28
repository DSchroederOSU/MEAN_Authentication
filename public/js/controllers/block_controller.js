
angular.module('blockController', [])
    .controller('blockController', function($scope, Buildings, UserGoogle) {

        Buildings.get()
            .success(function(data) {
                $scope.buildings = data;
                $scope.selected = data[0];
            });
        UserGoogle.get()
            .success(function(data) {
                $scope.google_user = data;
            });
    });