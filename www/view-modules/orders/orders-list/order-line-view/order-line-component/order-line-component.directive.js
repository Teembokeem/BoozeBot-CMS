(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderLineComponent', orderLineComponent);

   orderLineComponent.$inject = ['$state'];
   function orderLineComponent($state) {
     var directive = {
         templateUrl: 'view-modules/orders/orders-list/order-line-view/order-line-component/order-line-component.directive.html',
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