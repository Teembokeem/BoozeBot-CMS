(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('productShow', productShow);

   productShow.$inject = [];
   function productShow() {
 
     var directive = {
         templateUrl: 'view-modules/products/product-show/product-show.directive.html',
         
         link: link,
         restrict: 'EA',
         
     };
     return directive;
    
     function link($scope, element, attrs) {
        $scope.product = JSON.parse(attrs.product)      
     }
   }

})();