(function() {
'use strict';

  var Orders = [];
  angular
    .module('Order.api.module')
    .factory('OrderManager', OrderManager);

  OrderManager.$inject = ['OrderDispatcher', 'OrderSchema', 'storage'];
  function OrderManager(OrderDispatcher, OrderSchema, storage) {
    var service = {
      Orders : Orders,
      transformOrders: transformOrders,
      createOrder: createOrder,
      removeOrders: removeOrders,
      getOrders: getOrders,
      updateOrder: updateOrder,
      deleteOrder: deleteOrder,
    };
        
    var Schema = {
      status: 0,
      products: [],
      qty: [],
      total: 0
    };
    return service;

    ////////////////
    function transformOrders(arr) {
      if (!Array.isArray(arr)) {
        return new OrderSchema(arr);
      }
      var Orders = [];
      for (var i = 0; i < arr.length; i++) {
        Orders.push(newOrder(arr[i], i));
      }
      return Orders;
    }

    function newOrder(order, index) {
      return new OrderSchema(order, index);
    }

    function createOrder(order) {
      OrderDispatcher.post(order)
    }

    function updateOrder(order, updates) {
      var index = order._index;
      return OrderDispatcher.update(order, updates).then(function(newOrder) {
        newOrder = newOrder(newOrder, index);
        service.Orders[index] = new OrderSchema(newOrder, index);
        return newOrder;
      }) 
    }

    function deleteOrder(order) {
      return OrderDispatcher.destroy(order).then(function(done) {
        return done
      })
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
      return OrderDispatcher.get().then(transformOrders).then(setOrders);
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