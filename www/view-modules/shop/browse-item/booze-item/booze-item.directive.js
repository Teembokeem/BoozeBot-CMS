(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('boozeItem', boozeItem);

   boozeItem.$inject = ['$state'];
   function boozeItem($state) {
 
     var directive = {
         templateUrl: 'view-modules/shop/browse-item/booze-item/booze-item.directive.html',
         restrict: 'EA',
         scope: {
             item: '='
         }
         
     };
     return directive;
   }

})();