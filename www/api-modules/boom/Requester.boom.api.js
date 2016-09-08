(function() {
'use strict';

  angular
    .module('Boom.api.module')
    .factory('Requester', Requester);

  Requester.$inject = ['urlService', '$http'];
  
  function Requester(urlService, $http) {
    var api = urlService.api + 'booms',
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