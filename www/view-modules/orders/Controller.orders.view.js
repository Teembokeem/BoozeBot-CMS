(function() {
    'use strict'

    angular
        .module('Orders.view.module')
        .controller('OrdersCtrl', OrdersCtrl);
    
    OrdersCtrl.$inject = ['$log', 'OrderManager', 'OrderDispatcher'];

    function OrdersCtrl($log, OrderManager, OrderDispatcher) {
        var vc = this;
        $log.instantiate("Orders", "Controller");
        $log.info("Manager", OrderManager)

        vc.stateHandler = 'booze.orders';
        vc.orders = OrderManager.orders;

        // temp solution for reducing values for total quantity;
        vc.orders.forEach(function(order) {
            order.totalqty = Object.keys(order.qty).reduce(function(sum, key) {
                return sum + order.qty[key]
            }, 0);
        })
        $log.info("orders", OrderManager.orders)

        vc.select = function(order) {
            vc.stateHandler = 'booze.orders.show';
            vc.order = order;
        };

        vc.deselect = function() {
            vc.order = null;
            vc.stateHandler = 'booze.orders';
        };

        vc.filter = 'Pending';
    }
})();