
angular.module('profileController', [])
    .controller('profileController', function($scope, UserCandy, UserGoogle, AddCandy) {

    UserCandy.get()
        .success(function(data) {
            $scope.candys = data;
            $scope.selected = data[0];
        });
    UserGoogle.get()
    .success(function(data) {
        $scope.google_user = data;
        $scope.firstname = data.name.split(' ')[0];
    });
    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.addCandy = function() {
        var selected = $scope.selected;
        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        // people can't just hold enter to keep adding the same to-do anymore
        if (!$.isEmptyObject($scope.candyForm)) {
            // call the create function from our service (returns a promise object)
            AddCandy.create($scope.candyForm)
            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.candys = data; // assign our new list of todos
                $scope.candyForm = {};
                $scope.selected = selected;
            });
        }
    };
    $scope.showDashboards = function () {

    }
});

