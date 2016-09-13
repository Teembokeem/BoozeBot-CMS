(function() {
  'use strict';

  angular.module('Shop.view.module', ['ngCart', 'Order.api.module'])
    
    
    .run(function($log) {
        $log.info('Shop View Module Loaded!');
    }); 
})();