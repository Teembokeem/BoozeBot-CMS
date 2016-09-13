(function() {
  'use strict';

  angular.module('Order.api.module', ['Api.base.module', 'Product.api.module'])
    .run(function(OrderManager, storage, ProductManager) {
              
        var seedOrders = [
            {
                name: 'Ben',
                total: 35.00,
                driver: '',
                qty: {
                    "57d1f02839069f597f2a20b7" : 1,  
                    "57d1f02839069f597f2a20bc" : 2
                },
                status: 0 //"Pending" 
            },
            {
                name: 'Adam',
                total: 35.00,
                driver: 'Tom Cruise',
                qty: {
                    "57d1f02839069f597f2a20bf" : 2
                },
                status: 1 //"Assigned" 
            },
            {
                name: 'Craig',
                total: 35.00,
                driver: 'Sarah Marshall',
                qty: {
                    "57d1f02839069f597f2a20bf" : 3
                },
                status: 2 // "Accepted" 
            },
            {
                name: 'Ben',
                total: 35.00,
                driver: '',
                qty: {
                    "57d1f02839069f597f2a20c1" : 2,

                },
                status: 0 //"Pending" 
            },
            {
                name: 'Adam',
                total: 35.00,
                driver: 'Tom Cruise',
                qty: {
                    "57d1f02839069f597f2a20bb" : 2,
                    "57d1f02839069f597f2a20b9" : 2
                },
                status: 3 // "In Progress" 
            },
            {
                name: 'Craig',
                total: 35.00,
                driver: 'Tom Cruise',
                qty: {
                    "57d1f02839069f597f2a20c1" : 1
                },
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
        var prods = {};
        OrderManager.orders.forEach(function(order) {
            order.products = {};
            for (var i in order.qty) {
                var prod = order.qty[i];
                if (prods[i]) {
                    order.products[i] = prods[i];
                } else {
                    var _prod = ProductManager.findById(i);
                    prods[i] = _prod;
                    order.products[i] = _prod;
                }
            }
            order.calcTotal();
        });
      }
    });
})();