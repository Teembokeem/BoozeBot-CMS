(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderCommandComponent', orderCommandComponent);

   orderCommandComponent.$inject = ['$state'];
   function orderCommandComponent($state) {
     var directive = {
         templateUrl: 'view-modules/orders/orders-list/order-command-view/order-command-component/order-command-component.directive.html',
         restrict: 'EA',
         replace: true,
         scope: {
          //  List of orders to display
           orders: '=',
           status: '=',
           select: '='
          //  Function to call when clicking a product
         },
         
     };
     return directive;
   }

})();