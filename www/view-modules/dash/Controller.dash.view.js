(function() {
    'use strict'

    angular
        .module('Dash.view.module')
        .controller('DashCtrl', DashCtrl);
    
    DashCtrl.$inject = ['$log', 'OrderManager'];

    function DashCtrl($log, OrderManager) {
        $log.instantiate("Dash", "Controller");
        $log.info("OrderManager", OrderManager)
    }
})();