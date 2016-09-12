(function() {
    'use strict'
    var cnt = 0;
    angular
        .module('Products.view.module')
        .controller('ProductsCtrl', ProductsCtrl);
    
    ProductsCtrl.$inject = ['$scope', '$log', 'ProductManager', 'ProductDispatcher', '$state'];

    function ProductsCtrl($scope, $log, ProductManager, ProductDispatcher, $state) {
        var vc = this;
        $log.instantiate("Products", "Controller");
        
        vc.stateHandler = $state.current.name
        vc.products = ProductManager.Products;
        vc.product = null;

        vc.select = function(product) {
            vc.stateHandler = 'booze.products.show';
            vc.product = product;
            console.log('PRODUCT', vc.product);
        }

        vc.deselect = function() {
            vc.product = null;
            vc.stateHandler = 'booze.products';
        }

        vc.updateState = function(name) {
            vc.stateHandler = name;
        }
    }
})();

// Todo: DO SHIT