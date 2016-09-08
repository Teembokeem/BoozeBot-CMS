(function() {
'use strict';

  var Orders = [];
  angular
    .module('Order.api.module')
    .factory('OrderManager', OrderManager);

  OrderManager.$inject = ['OrderRequester', 'OrderSchema', 'Orders', 'storage'];
  function OrderManager(OrderRequester, OrderSchema, Orders, storage) {
    var service = {
      Orders : Orders,
      makeOrders: makeOrders,
      removeOrders: removeOrders,
      getOrders: getOrders
    };
    
    return service;

    ////////////////
    function makeOrders(arr) {
      if (!Array.isArray(arr)) {
        return new OrderSchema(arr);
      }
      var Orders = [];
      for (var i = 0; i < arr.length; i++) {
        Orders.push(new OrderSchema(arr[i], i));
      }
      return Orders;
    }

    function setOrders(Orders) {
      // Orders.set(Orders);
      writeOrders(Orders);
      service.Orders = Orders;
      return service.Orders;
    }

        function writeOrders(Orders) {
        localStorage.setItem('Orders', JSON.stringify(Orders));
        }



    function getOrders() {
      return OrderRequester.get().then(makeOrders).then(setOrders);
    }

    function removeOrders(Orders) {
      for (var i = 0; i < service.Orders.length; i++) {
        var checkOrders = service.Orders[i];
        if (checkOrders == Orders) {
          service.Orders.splice(i, 1);
          return service.Orders;
        }
      } 
    //   console.error('Error locating Orders', Orders);
      return service.Orders;
    }


  }
})();