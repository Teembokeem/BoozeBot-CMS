(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('ordersList', ordersList);

   ordersList.$inject = ['$state'];
   function ordersList($state) {
     var directive = {
         templateUrl: 'view-modules/orders/orders-list/orders-list.directive.html',
         restrict: 'EA',
         scope: {
          //  List of orders to display
           orders: '=',
          //  Function to call when clicking a product
           select: '='
         }
         
     };
     return directive;
   }

})();