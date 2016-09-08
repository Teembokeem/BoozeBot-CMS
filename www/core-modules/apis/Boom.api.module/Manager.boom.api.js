(function() {
'use strict';

  var booms = [];
  angular
    .module('Boom.api.module')
    .factory('Manager', Manager);

  Manager.$inject = ['Requester', 'Schema', 'Booms', 'storage'];
  function Manager(Requester, Schema, Booms, storage) {
    var service = {
      booms : booms,
      makeBooms: makeBooms,
      removeBoom: removeBoom,
      getBooms:getBooms
    };
    
    return service;

    ////////////////
    function makeBooms(arr) {
      if (!Array.isArray(arr)) {
        return new Schema(arr);
      }
      var booms = [];
      for (var i = 0; i < arr.length; i++) {
        booms.push(new Schema(arr[i], i));
      }
      return booms;
    }

    function writeBooms(booms) {
      localStorage.setItem('booms', JSON.stringify(booms));
    }

    function removeBoom(boom) {
      for (var i = 0; i < service.booms.length; i++) {
        var checkBoom = service.booms[i];
        if (checkBoom == boom) {
          service.booms.splice(i, 1);
          return service.booms;
        }
      }
      console.error('Error locating boom', boom);
      return service.booms;
    }

    function setBooms(booms) {
      // Booms.set(booms);
      writeBooms(booms);
      service.booms = booms;
      return service.booms;
    }

    function getBooms() {
      return Requester.get().then(makeBooms).then(setBooms);
    }
  }
})();