(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderShow', orderShow);

   orderShow.$inject = ['OrderManager'];
   function orderShow(OrderManager) {
    var sharedStuff = {};
     var directive = {
         templateUrl: 'view-modules/orders/order-show/order-show.directive.html',
         restrict: 'EA',
         controller: orderShowCtrl,
         controllerAs: 'dc',
         scope: {
             order: '=',
             exit: '=',
         }
         
     };
     return directive;
   }

   orderShowCtrl.$inject = ['$scope', 'OrderManager'];
   function orderShowCtrl($scope, OrderManager) {
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

       dc.update = function(order, updates) {
           order.update(updates);
           dc.exit();
       };

       dc.destroy = function(order) {
           console.log('ORDERS', OrderManager.orders)
           order.delete(OrderManager.orders);
           dc.exit();
       };
   }

})();