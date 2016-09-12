(function() {
'use strict';

  angular
    .module('Product.api.module')
    .factory('ProductSchema', ProductSchema);

  ProductSchema.$inject = [];
  function ProductSchema() {
  
    function Product(product, index) {
      for (var i in product) {
        this[i] = product[i];
      }
      
      // countUpvotes(this);
      this._index = index;
      return this;
    }

    Product.prototype.initialize = function() {
      console.log('Hello', this);
      return this;
    };

    Product.prototype.upvote = function() {
      console.log('UPVOTES');
      return this;
    };

    Product.prototype.sayHi = function() {
        alert('Hello', this);
        return this;
    };

    Product.prototype.update = function(info) {
        for (var i in info) {
            if (i !== '_id') {
                this[i] = info[i];
            }
        }
        // TODO: make API call here and store past props in case of error
        return this;
    };

    return Product;
  }
})();