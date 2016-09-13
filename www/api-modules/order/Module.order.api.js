(function() {
  'use strict';

  angular.module('Order.api.module', ['Api.base.module'])
    .run(function(OrderManager, storage) {
              
        var seedOrders = [
            {
            name: 'Ben',
            total: 35.00,
            driver: '',
            status: 0 //"Pending" 
            },
            {
            name: 'Adam',
            total: 35.00,
            driver: 'Tom',
            status: 1 //"Assigned" 
            },
            {
            name: 'Craig',
            total: 35.00,
            driver: 'Amar',
            status: 2 // "Accepted" 
            },
            {
            name: 'Ben',
            total: 35.00,
            driver: '',
            status: 0 //"Pending" 
            },
            {
            name: 'Adam',
            total: 35.00,
            driver: 'Tom',
            status: 3 // "In Progress" 
            },
            {
            name: 'Craig',
            total: 35.00,
            driver: 'Tom',
            status: 4 // "Completed" 
            }
        ];

      OrderManager.store = new storage('orders');
      console.log('namespace', OrderManager.store);
      if (OrderManager.store.getItem()) {
        OrderManager.orders = OrderManager.store.getItem();
      } else {
        // OrderManager.getOrders();
        console.warn('Ordermanager still using seeded data');
        OrderManager.orders = OrderManager.transformOrders(seedOrders);
      }
    });
})();