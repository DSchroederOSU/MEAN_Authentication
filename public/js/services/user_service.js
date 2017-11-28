// js/services/user_service.js
angular.module('userService', [])

// super simple service
// each function returns a promise object
    .factory('UserGoogle', function($http) {
        return {
            get : function() {
                return $http.get('/api/google_user');
            }
        }
    })
    .factory('UserCandy', function($http) {
        return {
            get : function() {
                return $http.get('/api/candy');
            }
        }
    })
    .factory('AddCandy', function($http) {
        return {
            create : function(candyData) {
                return $http.post('/api/candy', candyData);
            },
        }
    });