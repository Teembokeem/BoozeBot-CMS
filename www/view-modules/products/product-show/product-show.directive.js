(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('productShow', productShow);

   productShow.$inject = [];
   function productShow() {
    var sharedStuff = {};
     var directive = {
         templateUrl: 'view-modules/products/product-show/product-show.directive.html',
         restrict: 'EA',
         controller: productShowCtrl,
         controllerAs: 'dc',
         scope: {
             product: '=',
             exit: '='
         }
         
     };
     return directive;
   }

   function productShowCtrl($scope) {
       var dc = this;
       dc.exit = function() {
           dc.showEdit = false;
           //  This is basically the vc.deselect function     
           $scope.exit();
       };

       dc.edit = function(product) {
           dc.product = Object.create(product);
           dc.showEdit = !dc.showEdit;
       };
   }

})();