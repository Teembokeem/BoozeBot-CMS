(function() {
'use strict';

    angular
        .module('cart')
        .factory('cart', cart);

    cart.$inject = ['storage'];
    function cart(store) {
        var storage = {
            set: function(d) {localStorage.setItem('_cart_', JSON.stringify(d));},
            get: function() {return JSON.parse(localStorage.getItem('_cart_'));}
        };
        console.log('STORE', storage);
        
        var Cart = storage.get() || {};
        
        var service = {
            addItem:addItem,
            removeItem:removeItem,

            submit:submit,
            clear:clear,
        };
        
        return service;

        ////////////////
        function addItem(item, qty) {
            var idx = Cart[item._id];
            if (idx) {
                idx._qty += qty || 1;
                return service;
            }
            idx._qty = item;
            idex._qty = 1;
            storage.set(Cart);
            return service;
        }

        function removeItem(item, qty) {
            if (!qty || qty >= idx._qty) {
                delete Cart[item._id];
            } else {
                Cart[item._id]._qty -= qty;
            }
            storage.set(Cart);
            return service;
        }

        function get() {
            return Cart;
        }

        function submit() {
            alert('Submitting!');
        }
        function clear() {
            Cart = {};
            storage.set(null);
        }
    }
})();