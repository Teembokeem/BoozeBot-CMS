(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('productsList', productsList);

   productsList.$inject = ['$state'];
   function productsList($state) {
 
     var directive = {
         templateUrl: 'view-modules/products/products-list/products-list.directive.html',
         restrict: 'EA',
         scope: {
          //  List of products to display
           products: '=',
          //  Function to call when clicking a product
           select: '='
         }
         
     };
     return directive;
   }

})();