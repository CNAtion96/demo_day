(function() {
    'use strict';

    angular
        .module('demoDay')
        .factory('API', function($http){

            return{
                addGuest: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://demo-day-signin.herokuapp.com/guests`
                    })
                },
                getGuests: () => {
                    return $http({
                        method:"GET",
                        url: `https://demo-day-signin.herokuapp.com/guests`
                    })
                },
            }
         });
        
})();