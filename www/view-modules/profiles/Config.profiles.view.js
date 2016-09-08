(function() {
    'use strict'


    angular.module('Profiles.view.module')


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('booze.profiles', {
                url: '^/profiles',
                templateUrl: '/view-modules/profiles/profiles.html',
                controller: 'ProfilesCtrl',
                controllerAs: 'vc',
                contentTitle: 'Profiles'
            })

    });

})();