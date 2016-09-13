(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('browseItem', browseItem);

   browseItem.$inject = ['$state'];
   function browseItem($state) {
 
     var directive = {
         templateUrl: 'view-modules/shop/browse-item/browse-item.directive.html',
         restrict: 'EA',
         scope: {
             items: '='
         }
         
     };
     return directive;
   }

})();