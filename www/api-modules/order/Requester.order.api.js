(function() {
'use strict';

  angular
    .module('Order.api.module')
    .factory('OrderRequester', OrderRequester);

  OrderRequester.$inject = ['urlService', '$http'];
  
  function OrderRequester(urlService, $http) {
    var api = urlService.api + 'orders',
        // Default to allow admin as suser without token
        options = {
          headers: {
            allow : 'Greg'
          }
        },
        service = {
      get:get
    };

    return service;

    ////////////////
    function format(response) {
      console.log('RESPONSE', response);
      return response.data;
    }

    function get() {
      return $http.get(api, options).then(format);
    }
  }
})(); 