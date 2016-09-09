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



    // function countUpvotes(boom) {
    //   if (!boom.upvotes) {
    //     boom.upvotes = {};
    //     boom.upvoteCount = 0;
    //     return boom;
    //   }
    //   var cnt = 0;
    //   for (var i in boom.upvotes) {
    //     if (boom.upvotes[i]) {
    //       cnt++;
    //     }
    //   }
    //   boom.upvoteCount = cnt;
    //   return boom;
    // }

    Product.prototype.initialize = function() {
      console.log('Hello', this);
      return this;
    };

    Product.prototype.upvote = function() {
      console.log('UPVOTES');
      return this;
    }

    return Product;
  }
})();