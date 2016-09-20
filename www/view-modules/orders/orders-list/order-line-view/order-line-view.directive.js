(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderLineView', orderLineView);

   orderLineView.$inject = ['$state'];
   function orderLineView($state) {
     var directive = {
         templateUrl: 'view-modules/orders/orders-list/order-line-view/order-line-view.directive.html',
         restrict: 'EA',
        //  replace: true,
         scope: {
          //  List of orders to display
           orders: '=',
          //  Function to call when clicking a product
           select: '=',
           tab: '='
         },
         
     };
     return directive;
   }

})();