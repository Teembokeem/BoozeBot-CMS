(function() {
    'use strict'


    angular.module('Sales.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.sales', {
                url: '^/sales',
                templateUrl: '/view-modules/sales/sales.html',
                controller: 'SalesCtrl',
                controllerAs: 'vc',
                contentTitle: 'Sales'
            });

    });

})();