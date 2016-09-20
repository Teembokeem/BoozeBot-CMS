(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderHeader', orderHeader);

   orderHeader.$inject = ['$state'];
   function orderHeader($state) {
     var directive = {
         templateUrl: 'view-modules/orders/order-header/order-header.directive.html',
         restrict: 'EA',
         replace: true,
         scope: {
          //  List of orders to display
           filter: '=',
           tab: '=',
           view: '=',
           orders: '=',
          //  Function to call when clicking a product
         },
         
     };
     return directive;
   }

})();