(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('boozeCart', boozeCart);

   boozeCart.$inject = ['$state'];
   function boozeCart($state) {
 
     var directive = {
         templateUrl: 'view-modules/shop/booze-cart/booze-cart.directive.html',
         restrict: 'EA',
         scope: {
         }
         
     };
     return directive;
   }

})();