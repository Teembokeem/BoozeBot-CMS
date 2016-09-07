(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('contentTitle', contentTitle);

   contentTitle.$inject = [];
   function contentTitle() {
 
     var directive = {
         templateUrl: 'js/directives/contentTitle/contentTitle.directive.html',
         
         link: link,
         restrict: 'EA',
         
     };
     return directive;
    
     function link($scope, element, attrs) {
          // console.log('elm', element)
                //  console.log('attrsB', attrs)
          //       console.log('scope', $scope)
          $scope.title = attrs.title
          
          // console.log($scope.boom.url) 

      
                
     }
   }

})();