(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderShow', orderShow);

   orderShow.$inject = [];
   function orderShow() {
    var sharedStuff = {};
     var directive = {
         templateUrl: 'view-modules/orders/order-show/order-show.directive.html',
         restrict: 'EA',
         controller: orderShowCtrl,
         controllerAs: 'dc',
         scope: {
             order: '=',
             exit: '='
         }
         
     };
     return directive;
   }

   function orderShowCtrl($scope) {
       var dc = this;
       dc.exit = function() {
           dc.showEdit = false;
           //  This is basically the vc.deselect function     
           $scope.exit();
       };

       dc.edit = function(order) {
           dc.order = Object.create(order);
           dc.showEdit = !dc.showEdit;
       };
   }

})();