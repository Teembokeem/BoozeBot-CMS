
angular.module('BoozeBot-cms', ['ionic', 'Services'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('booze', {
    url: '/',
    abstract: true,
    templateUrl: '/templates/abstract.html',
    controller: 'AppCtrl',
    controllerAs: 'ac'
    // abstract: true;
  })

  .state('booze.dash', {
    url: '^/dash',
    templateUrl: '/templates/tab-dash.html',
    // controller: 'DashCtrl',
    // controllerAs: 'ac'
  })

  .state('booze.orders', {
    url: '^/orders',
    templateUrl: '/templates/tab-orders.html',
    // controller: 'OrdersCtrl',
    // controllerAs: 'ac'
  })

  .state('booze.sales', {
    url: '^/sales',
    templateUrl: '/templates/tab-sales.html',
    // controller: 'SalesCtrl',
    // controllerAs: 'ac'
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
  $urlRouterProvider.otherwise('/orders');

});
