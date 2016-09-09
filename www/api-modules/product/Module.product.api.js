(function() {
  'use strict';

  angular.module('Product.api.module', ['Api.base.module'])
    .run(function(ProductManager, storage) {
      
      ProductManager.store = new storage('products');
      console.log('namespace', ProductManager.namespace)
      if (ProductManager.store.getItem()) {
        ProductManager.products = ProductManager.store.getItem();
      } else {
          ProductManager.getProducts();
      }
    });
})();