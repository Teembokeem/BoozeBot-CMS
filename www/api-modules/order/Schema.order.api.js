(function() {
'use strict';

  angular
    .module('Order.api.module')
    .factory('OrderSchema', OrderSchema);

  OrderSchema.$inject = [];
  function OrderSchema() {
  
    function Order(order, index) {
      for (var i in order) {
        this[i] = order[i];
      }
      
      this.status = statusEnum[this.status];
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

    Order.prototype.initialize = function() {
      console.log('Hello', this);
      return this;
    };

    Order.prototype.upvote = function() {
      console.log('UPVOTES');
      return this;
    };

    return Order;
  }

//   Translator from number to status as text
  var statusEnum = [
      "Pending",
      "Assigned",
      "Accepted",
      "In Progress",
      "Completed"
  ];
})();