(function() {
    'use strict'


    angular.module('Orders.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.orders', {
                url: '^/orders',
                templateUrl: '/view-modules/orders/orders.html',
                controller: 'OrdersCtrl',
                controllerAs: 'vc',
                contentTitle: 'Orders'
            })

    });

})();