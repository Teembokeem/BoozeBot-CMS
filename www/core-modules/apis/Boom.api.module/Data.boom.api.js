(function() {
'use strict';
  var _booms = [];
  angular
    .module('Boom.api.module')
    .factory('Booms', Booms);

  Booms.$inject = [];
  function Booms() {
    console.log('BOOMS LOADED');
    var service = {
      get: get,
      set: set 
    };
    
    return {
      booms: _booms
    };

    function get() {
      return booms;
    }

    function set(list) {
      booms = list;
      localStorage['booms'] = JSON.stringify(booms);
      return booms;
    }
  }
})();