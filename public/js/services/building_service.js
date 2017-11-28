// js/services/building_service.js
angular.module('buildingService', [])

// super simple service
// each function returns a promise object
    .factory('Buildings', function($http) {
        return {
            get : function() {
                return $http.get('/api/buildings');
            }
        }
    })
