(function() {
    'use strict'
    var cnt = 0;
    angular
        .module('Products.view.module')
        .controller('ProductsCtrl', ProductsCtrl);
    
    ProductsCtrl.$inject = ['$scope', '$log', 'ProductManager', 'ProductDispatcher', '$state'];

    function ProductsCtrl($scope, $log, ProductManager, ProductDispatcher, $state) {
        var vm = this;
        $log.instantiate("Products", "Controller");
        $log.info("Manager", ProductManager);
        $log.info("Your Data", ProductManager.Products);
        
        vm.stateHandler = $state.current.name

        vm.products = ProductManager.Products;

        vm.activate = function activate() {
            $log.info('Activating!!!!')
            ProductManager.Products.then(function(data) {
                console.log('I have the Products!!!!!!!!')
            })
        }

        $scope.$on('productSelected', function(evt, product) {
            console.log("hello", product);
            $state.go('booze.products.show', {name: product['Description']});
            vm.product = product;
        })
        
        // if (!cnt++) {
        //     activate()
        // }
        // ProductManager
        //     .getProducts()
        //     .then(function(data) {
        //         console.log("Data", data)
        //         vm.products = data
        //     })

        // ProductDispatcher
        //     .post({
        //         status: 0,
        //         products: [],
        //         qty: [],
        //         total: 0
        //     })
        //     .then(function(response) {
        //         $log.info("RESPONSES", response)
        //     })

        // OrderManager
        //     .updateOrder( "57d1cf4d049a2084435323f1", {
        //         status: 1,
        //         products: ['sup bitches'],
        //         qty: [1],
        //         total: 0
        //     })
        //     .then(function(response) {
        //         $log.info("RESPONSES===============================", response)
        //     })

        // OrderManager
        //     .deleteOrder('57d1cf4d049a2084435323f1')
        //     .then(function(response) {
        //         $log.info("RESPONSE BITCHES,  YOURE GONE", response)
        //     })

        vm.dataTilGregGetsBack = [
            {

            }
        ]
           
    }
})();

// Todo: DO SHIT