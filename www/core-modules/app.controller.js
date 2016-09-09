angular.module('BoozeBot-cms')

.controller('AppCtrl', function($scope, $state, $rootScope, $log) {
  $log.instantiate('App', 'Controller');

  var vm = this;
  vm.contentTitle = $state.current.contentTitle;

  $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams, $state) {
        $log.info('Traveling to ' + toState.url, toState);
        // $rootScope.contentTitle = ;
        vm.contentTitle = toState.contentTitle


        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
          event.preventDefault();
          $log.error("your state error", error)
        })
  })

  vm.orders = [
    {
      name: 'Ben',
      total: 35.00,
      status: "PD" 
    },
    {
      name: 'Adam',
      total: 35.00,
      status: "AS" 
    },
    {
      name: 'Craig',
      total: 35.00,
      status: "AC" 
    },
    {
      name: 'Ben',
      total: 35.00,
      status: "PD" 
    },
    {
      name: 'Adam',
      total: 35.00,
      status: "IP" 
    },
    {
      name: 'Craig',
      total: 35.00,
      status: "CP" 
    }
  ]

  console.log("suh dude", vm.orders)
});
