(function() {
    'use strict'


    angular.module('Products.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.products', {
                url: '^/products',
                templateUrl: '/view-modules/products/products.html',
                controller: 'ProductsCtrl',
                controllerAs: 'vc',
                // resolve: {
                //     products : function($q, ProductManager) {
                //         console.log('Providing!')
                //         var promise = $q.deferred()
                //         if (ProductManager.Products.length) {
                //             return $q.resolve(ProductManager.Products);
                //         }
                //         return ProductManager.getProducts();
                //     }
                // },
                contentTitle: 'Products'
            })

            .state('booze.products.show', {
                url: '^/:name',
                // templateUrl: '/view-modules/products/products.html',
                // resolve: {
                //     products : function($q, ProductManager) {
                //         console.log('Providing!')
                //         var promise = $q.deferred()
                //         if (ProductManager.Products.length) {
                //             return $q.resolve(ProductManager.Products);
                //         }
                //         return ProductManager.getProducts();
                //     }
                // },
            })

    })

    // .config(function(ProductManagerProvider, $logProvider) {
    //             $logProvider.$get().info("Grabbing products.");
    //             ProductManagerProvider.$get().getProducts()
    //                 .then(function(products) {
    //                     $logProvider.$get().info("Success: received products");
    //                 })
    //                 .catch(function(err) {
    //                     $logProvider.$get().info("Error: ", err)
    //                 }) 
    // })

})();