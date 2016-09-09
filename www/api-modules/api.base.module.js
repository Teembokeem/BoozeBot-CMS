(function() {
  'use strict';

  angular.module('Api.base.module', ['urlService', 'Services']);
  
})();

/*
  function BaseApi(url, formatRes) {
      this.options
      this.url
      return new APIModule()
  }

  function newMthod(start) {
    return funtion(data) {
      return start(this.url, data, this.options).then(format).catch(format)
    }
    
    var get = newMethod($http.get)

    function get(data) {
      return $http.get(this.url, data, this.options).then(format).catch
    }
    get()
  }
*/