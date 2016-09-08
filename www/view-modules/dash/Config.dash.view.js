(function() {
    'use strict'


    angular.module('Dash.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.dash', {
                url: '^/dash',
                templateUrl: '/view-modules/dash/dash.html',
                controller: 'DashCtrl',
                controllerAs: 'vc',
                contentTitle: 'Dashboard'
            })

    });

})();