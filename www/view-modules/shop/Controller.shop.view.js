(function() {
    'use strict';

    angular
        .module('Shop.view.module')
        .controller('ShopCtrl', ShopCtrl);
    
    ShopCtrl.$inject = ['$log', 'ProductManager', 'OrderDispatcher'];

    function ShopCtrl($log, ProductManager, ProductDispatcher) {
        var vc = this;
        $log.instantiate("Shops", "Controller");
        vc.items = ProductManager.Products.slice(0, 10);
        console.log('ITEM', vc.items[0])
    }
})();