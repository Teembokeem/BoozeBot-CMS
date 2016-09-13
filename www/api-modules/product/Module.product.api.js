(function() {
  'use strict';

  angular.module('Product.api.module', ['Api.base.module'])
    .run(function(ProductManager, storage) {
      
      ProductManager.store = new storage('products');
      console.log('namespace', ProductManager.store);
    //   TODO: call server on load instead of grabbing from local storage
      if (ProductManager.store.getItem()) {
        console.warn("STOERD IN LOCAL, make sure to call server");
        ProductManager.products = ProductManager.store.getItem();
      } else {
        //   ProductManager.getProducts();
        ProductManager.Products = ProductManager.transformProducts(JSON.parse(localStorage.getItem('Products')));
      }
    });
})();