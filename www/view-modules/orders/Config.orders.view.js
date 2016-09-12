(function() {
    'use strict'


    

    angular.module('Orders.view.module')


    .config(routes)
    // .config()


    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('booze.orders', {
                url: '^/orders',
                templateUrl: '/view-modules/orders/orders.html',
                controller: 'OrdersCtrl',
                controllerAs: 'vc',
                contentTitle: 'Orders'
            })
    }



})();