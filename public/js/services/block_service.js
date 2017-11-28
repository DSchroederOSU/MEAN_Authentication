// js/services/block_service.js
angular.module('blockService', [])

// super simple service
// each function returns a promise object
    .factory('Blocks', function($http) {
        return {
            get : function() {
                return $http.get('/api/buildings');
            }
        }
    })