'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngMaterial',
    'ngRoute',
    'myApp.login',
    'myApp.register'
]).config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {

    // theme configs
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');

    // route connfigs
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/register'});
}]);
