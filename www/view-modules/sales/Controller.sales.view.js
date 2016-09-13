(function() {
    'use strict'

    angular
        .module('Sales.view.module')
        .controller('SalesCtrl', SalesCtrl);
    
    SalesCtrl.$inject = ['$log', 'OrderManager', 'OrderDispatcher'];

    function SalesCtrl($log, OrderManager, OrderDispatcher) {
        var vm = this;
        $log.instantiate("Sales", "Controller");
           
    }
})();

// Todo: DO SHIT