(function() {
    'use strict'

    angular
        .module('Dash.view.module')
        .controller('DashCtrl', DashCtrl);
    
    DashCtrl.$inject = ['$log', 'OrderManager'];

    function DashCtrl($log, OrderManager) {
        var vc = this;
        $log.instantiate("Dash", "Controller");
        $log.info("OrderManager", OrderManager)
        var orders = OrderManager.orders;
        vc.orderNums = [0, 0, 0, 0, 0];
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i],
                index = statusEnum.indexOf(order.status);
            vc.orderNums[index]++;
        }

        console.log('NUMS', vc.orderNums)

        vc.labels = statusEnum;

        vc.options = {
            title: {
                display: true
            },
            legend: {
                display: true
            }
        }
    }
})();



  var statusEnum = [
      "Pending",
      "Assigned",
      "Accepted",
      "In Progress",
      "Completed"
  ];