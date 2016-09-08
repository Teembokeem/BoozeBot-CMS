(function() {
  'use strict';

  angular.module('Boom.api.module', ['Api.base.module', 'Services'])
    .run(function(Manager, storage) {
      
      Manager.store = new storage('booms');
      console.log('namespace', Manager.namespace)
      if (Manager.store.getItem()) {
        Manager.booms = Manager.store.getItem();
      }
    });
})();