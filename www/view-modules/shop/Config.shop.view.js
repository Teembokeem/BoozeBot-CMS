(function() {
    'use strict';


    angular.module('Shop.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.shop', {
                url: '^/shop',
                templateUrl: '/view-modules/shop/shop.html',
                controller: 'ShopCtrl',
                controllerAs: 'vc',
                contentTitle: 'Shop'
            });

    });

})();