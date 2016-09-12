(function() {
'use strict';

  var Products = [];
  angular
    .module('Product.api.module')
    .factory('ProductManager', ProductManager);

  ProductManager.$inject = ['ProductDispatcher', 'ProductSchema', 'storage'];
  function ProductManager(ProductDispatcher, ProductSchema, storage) {
    
    var service = {
      Products : Products,
      transformProducts: transformProducts,
      createProduct: createProduct,
      removeProducts: removeProducts,
      getProducts: getProducts,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct,
    };
        
    var Schema = {
      status: 0,
      products: [],
      qty: [],
      total: 0
    };
    return service;

    ////////////////
    function transformProducts(arr) {
      if (!Array.isArray(arr)) {
        return new ProductSchema(arr);
      }
      var Products = [];
      for (var i = 0; i < arr.length; i++) {
        Products.push(newProduct(arr[i], i));
      }
      return Products;
    }

    function newProduct(product, index) {
      return new ProductSchema(product, index);
    }

    function createProduct(product) {
      ProductDispatcher.post(product)
    }

    function updateProduct(product, updates) {
      var index = product._index;
      return ProductDispatcher.update(product, updates).then(function(newProduct) {
        newProduct = newProduct(newProduct, index);
        service.Products[index] = new ProductSchema(newProduct, index);
        return newProduct;
      }) 
    }

    function deleteProduct(product) {
      return ProductDispatcher.destroy(product).then(function(done) {
        return done
      })
    }

    function setProducts(Products) {
      writeProducts(Products);
      service.Products = Products;
      return service.Products;
    }

    function writeProducts(Products) {
        // TODO: change this to Product Storage system using namespaces instead of localStorage
        localStorage.setItem('Products', JSON.stringify(Products));
    }

    

    function getProducts() {
        service.Products = ProductDispatcher.get().then(transformProducts).then(setProducts); 
      return service.Products;
    }

    function removeProducts(Products) {
      for (var i = 0; i < service.Products.length; i++) {
        var checkProducts = service.Products[i];
        if (checkProducts == Products) {
          service.Products.splice(i, 1);
          return service.Products;
        }
      } 
    //   console.error('Error locating Products', Products);
      return service.Products;
    }


  }
})();