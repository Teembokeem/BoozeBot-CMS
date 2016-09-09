(function() {
'use strict';

  angular
    .module('urlService', [])
    .factory('urlService', urlService);

  urlService.$inject = ['$log'];
  
  function urlService($log) {
    var base = 'http://192.168.0.4:3001/',
        api  = base + 'api/';
   
    var service = {
      api: api
    };
    
    return service;

    ////////////////

  }
})();