(function () {
  'use strict'

  angular.module('BoozeBot-cms',
    ['ionic',
      'Services',
      'Directives',
      'Configs',
      'Dash.view.module',
      'Orders.view.module',
      'Sales.view.module',
      'Shop.view.module',
      'Profiles.view.module',
      'Products.view.module'
    ])


    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider

        // setup an abstract state for the tabs directive
        .state('booze', {
          url: '/',
          abstract: true,
          templateUrl: '/core-modules/app.abstract.html',
          controller: 'AppCtrl',
          controllerAs: 'ac'
          // abstract: true;
        });

      $urlRouterProvider.otherwise('/dash');

    })

})();
