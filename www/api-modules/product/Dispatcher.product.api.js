(function() {
'use strict';

  angular
    .module('Product.api.module')
    .factory('ProductDispatcher', ProductDispatcher);

  ProductDispatcher.$inject = ['urlService', '$http'];
  
  function ProductDispatcher(urlService, $http) {
    var api = urlService.api + 'products',
        // Default to allow admin as suser without token
        options = {
          headers: {
            allow : 'Greg'
          }
        },
        service = {
          get:get,
          post: post,
          update: update,
          destroy: destroy
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

    function post(data) {
      return $http.post(api, data, options).then(format);
    }

    function update(params, data) {
      return $http.put(api + '/?_id=' + params, data, options).then(format);
    }

    function destroy(params) {
      return $http.delete(api + '/?_id=', options).then(format);
    }
  }
})(); 