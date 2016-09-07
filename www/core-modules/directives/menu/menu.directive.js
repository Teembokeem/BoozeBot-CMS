(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('menu', menu);

   menu.$inject = [];
   function menu() {
 
     var directive = {
         templateUrl: 'js/directives/menu/menu.directive.html',
         
         link: link,
         restrict: 'EA',
         
     };
     return directive;
    
     function link($scope, element, attrs) {
          // console.log('elm', element)
                //  console.log('attrsB', attrs)
          //       console.log('scope', $scope)
          // $scope.hello = attrs.boom
          
          // console.log($scope.boom.url) 

      
                
     }
   }

})();