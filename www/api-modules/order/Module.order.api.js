(function() {
  'use strict';

  angular.module('Order.api.module', ['Api.base.module'])
    .run(function(OrderManager, storage) {
              
        var seedOrders = [
            {
            name: 'Ben',
            total: 35.00,
            status: "PD" 
            },
            {
            name: 'Adam',
            total: 35.00,
            status: "AS" 
            },
            {
            name: 'Craig',
            total: 35.00,
            status: "AC" 
            },
            {
            name: 'Ben',
            total: 35.00,
            status: "PD" 
            },
            {
            name: 'Adam',
            total: 35.00,
            status: "IP" 
            },
            {
            name: 'Craig',
            total: 35.00,
            status: "CP" 
            }
        ];

      OrderManager.store = new storage('orders');
      console.log('namespace', OrderManager.namespace)
      if (OrderManager.store.getItem()) {
        OrderManager.orders = OrderManager.store.getItem();
      } else {
        // OrderManager.getOrders();
        OrderManager.orders = OrderManager.transformOrders(seedOrders);
      }
    });
})();