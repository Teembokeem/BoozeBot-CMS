(function() {
    'use strict'

    angular
        .module('Profiles.view.module')
        .controller('ProfilesCtrl', ProfilesCtrl);
    
    ProfilesCtrl.$inject = ['$log', 'OrderManager', 'OrderDispatcher'];

    function ProfilesCtrl($log, OrderManager, OrderDispatcher) {
        var vm = this;
        $log.instantiate("Profiles", "Controller");
        // $log.info("Manager", OrderManager)

        // OrderManager
        //     .getSales()
        //     .then(function(data) {
        //         console.log("Data", data)
        //         vm.Sales = data
        //     })

        // OrderDispatcher
        //     .post({
        //         status: 0,
        //         products: [],
        //         qty: [],
        //         total: 0
        //     })
        //     .then(function(response) {
        //         $log.info("RESPONSES", response)
        //     })

        // OrderManager
        //     .updateOrder( "57d1cf4d049a2084435323f1", {
        //         status: 1,
        //         products: ['sup bitches'],
        //         qty: [1],
        //         total: 0
        //     })
        //     .then(function(response) {
        //         $log.info("RESPONSES===============================", response)
        //     })

        // OrderManager
        //     .deleteOrder('57d1cf4d049a2084435323f1')
        //     .then(function(response) {
        //         $log.info("RESPONSE BITCHES,  YOURE GONE", response)
        //     })
           
    }
})();

// Todo: DO SHIT