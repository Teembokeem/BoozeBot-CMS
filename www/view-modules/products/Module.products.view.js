
(function() {
  'use strict';

  angular.module('Products.view.module', ['Product.api.module'])
    
    
    .run(function($log, ProductManager, storage) {
        if (localStorage.getItem('Products')) {
            ProductManager.Products = JSON.parse(localStorage.getItem('Products'));
        } else {
            ProductManager.Products.then(function(data) {
                console.log('I have the Products!!!!!!!!')
            })

        }
    }); 
})();