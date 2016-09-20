(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderCommandView', orderCommandView);

   orderCommandView.$inject = ['$state'];
   function orderCommandView($state) {
     var directive = {
         templateUrl: 'view-modules/orders/orders-list/order-command-view/order-command-view.directive.html',
         restrict: 'EA',
        //  replace: true,
         scope: {
          //  List of orders to display
           orders: '=',
          //  Function to call when clicking a product
           select: '=',
         },
         
     };
     return directive;
   }

})();