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
        vc.pieNums = [0, 0, 0, 0, 0];
        vc.series = [
            "Pending",
            "Assigned",
            "Accepted",
            "In Progress",
            "Completed"
        ];
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i],
                index = statusEnum.indexOf(order.status);
            vc.pieNums[index]++;
        }

        console.log('NUMS', vc.pieNums)

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