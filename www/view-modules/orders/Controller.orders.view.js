(function() {
    'use strict'

    angular
        .module('Orders.view.module')
        .controller('OrdersCtrl', OrdersCtrl);
    
    OrdersCtrl.$inject = ['$log', 'OrderManager', 'OrderDispatcher'];

    function OrdersCtrl($log, OrderManager, OrderDispatcher) {
        var vm = this;
        $log.instantiate("Orders", "Controller");
        $log.info("Manager", OrderManager)


        vm.orders = OrderManager.orders;
        // OrderManager
        //     .getOrders()
        //     .then(function(data) {
        //         console.log("Data", data)
        //         vm.orders = data
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