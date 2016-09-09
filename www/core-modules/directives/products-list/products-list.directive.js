(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('productsList', productsList);

   productsList.$inject = [];
   function productsList() {
 
     var directive = {
         templateUrl: 'core-modules/directives/products-list/products-list.directive.html',
         
         link: link,
         restrict: 'EA',
         
     };
     return directive;
    
     function link($scope, element, attrs) {
        $scope.products = JSON.parse(attrs.products);
        $scope.select = function(product) {
            $scope.$emit('productSelected', product);
        }     
     }
   }

})();