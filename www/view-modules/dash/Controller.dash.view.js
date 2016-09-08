(function() {
    'use strict'

    angular
        .module('Dash.view.module')
        .controller('DashCtrl', DashCtrl);
    
    DashCtrl.$inject = ['$log', 'Manager'];

    function DashCtrl($log, Manager) {
        $log.instantiate("Dash", "Controller");
        $log.info("Manager", Manager)
    }
})();