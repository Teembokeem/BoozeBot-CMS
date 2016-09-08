(function() {
    'use strict'

    angular
        .module('Orders.view.module')
        .controller('OrdersCtrl', OrdersCtrl);
    
    OrdersCtrl.$inject = ['$log', 'Manager'];

    function OrdersCtrl($log, Manager) {
        $log.instantiate("Orders", "Controller");
        $log.info("Manager", Manager)
    }
})();