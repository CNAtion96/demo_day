(function() {
    'use strict';

    angular
        .module('demoDay')
        .controller('mainController', function(API) {
            const vm = this;

            vm.getGuests = function(){
                let getGuests = API.getGuests();
                getGuests.then(res => {
                    vm.guests = res.data
                    console.log(vm.guests);
                })
            }
            vm.addGuest = function(){
                vm.guest = {name: vm.name, email: vm.email, company: vm.company};
                let addGuest = API.addGuest(vm.guest);
                addGuest.then(res => {
                    console.log(res);
                    window.location.reload();
                })
                vm.getGuests();
            }

            vm.getGuests();
        
        })
        
})();