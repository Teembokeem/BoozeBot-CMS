(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('ordersList', ordersList);

   ordersList.$inject = [];
   function ordersList() {
 
     var directive = {
         templateUrl: 'js/directives/ordersList/ordersList.directive.html',
         
         link: link,
         restrict: 'EA',
         
     };
     return directive;
    
     function link($scope, element, attrs) {
          console.log('elm', element)
                 console.log('attrsB', attrs)
                console.log('scope', $scope)
          $scope.orders = attrs.orders
          
          // console.log($scope.boom.url) 

      
                
     }
   }

})();