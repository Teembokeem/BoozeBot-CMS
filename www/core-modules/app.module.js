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
      'Profiles.view.module'
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
        })

        .state('booze.profiles', {
          url: '^/profiles',
          templateUrl: '/templates/tab-profiles.html',
          // controller: 'ProfilesCtrl',
          // controllerAs: 'ac'
        })

        .state('booze.products', {
          url: '^/products',
          templateUrl: '/templates/tab-products.html',
          // controller: 'ProductsCtrl',
          // controllerAs: 'ac'
        })


      // Each tab has its own nav history stack:


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/dash');

    });

})();
