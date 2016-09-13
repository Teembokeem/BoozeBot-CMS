(function() {
   'use strict';

   angular
     .module('Directives')
     .directive('orderStatus', orderStatus);

   orderStatus.$inject = [];
   function orderStatus() {
    var sharedStuff = {};
     var directive = {
         templateUrl: 'view-modules/orders/order-status/order-status.directive.html',
         restrict: 'EA',
         controller: orderStatusCtrl,
         controllerAs: 'dc',
         scope: {
             order: '=',
             exit: '='
         }
         
     };
     return directive;
   }

   function orderStatusCtrl($scope) {
       var dc = this;
       
        dc.status = '';

       dc.assign = function(order, driver) {
           console.log('Assigning', order, driver);
           console.log(order.assign(driver));
           $scope.exit();
       };

       dc.accept = function(order) {
           console.log(order.accept());
           $scope.exit();
       };

       dc.decline = function(order) {
           console.log(order.decline());
           $scope.exit();
       };

       dc.start = function(order) {
           console.log(order.start());
           $scope.exit();
       };

       dc.complete = function(order) {
           console.log(order.complete());
           $scope.exit();
       };
   }

})();