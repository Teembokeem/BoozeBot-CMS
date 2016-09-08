(function() {
  'use strict';

  angular.module('Order.api.module', ['Api.base.module'])
    .run(function(OrdersManager, storage) {
      
      OrdersManager.store = new storage('orders');
      console.log('namespace', OrdersManager.namespace)
      if (OrdersManager.store.getItem()) {
        OrdersManager.orders = OrdersManager.store.getItem();
      }
    });
})();