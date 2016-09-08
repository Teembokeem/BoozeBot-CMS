(function() {
'use strict';

  angular
    .module('Orders.api.module')
    .factory('Schema', Schema);

  Schema.$inject = ['Requester'];
  function Schema(Requester) {
    
    function Boom(boom, index) {
      for (var i in boom) {
        this[i] = boom[i];
      }
      
      countUpvotes(this);
      this._index = index;
      return this;
    }

    function countUpvotes(boom) {
      if (!boom.upvotes) {
        boom.upvotes = {};
        boom.upvoteCount = 0;
        return boom;
      }
      var cnt = 0;
      for (var i in boom.upvotes) {
        if (boom.upvotes[i]) {
          cnt++;
        }
      }
      boom.upvoteCount = cnt;
      return boom;
    }

    Boom.prototype.sayHi = function() {
      console.log('Hello', this);
      return this;
    };

    Boom.prototype.upvote = function() {
      console.log('UPVOTES', ++this.upvoteCount);
      return this;
    }

    return Boom;
  }
})();