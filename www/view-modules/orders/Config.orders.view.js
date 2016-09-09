(function() {
    'use strict'


    

    angular.module('Orders.view.module')


    .config(routes);


    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($poop, $urlRouterProvider) {

        $poop
            .state('booze.orders', {
                url: '^/orders',
                templateUrl: '/view-modules/orders/orders.html',
                controller: 'OrdersCtrl',
                controllerAs: 'vc',
                contentTitle: 'Orders'
            })
    }

})();