(function() {
  'use strict';

  angular.module('Order.api.module', ['Api.base.module'])
    .run(function(OrderManager, storage) {
      
      OrderManager.store = new storage('orders');
      console.log('namespace', OrderManager.namespace)
      if (OrderManager.store.getItem()) {
        OrderManager.orders = OrderManager.store.getItem();
      }
    });
})();