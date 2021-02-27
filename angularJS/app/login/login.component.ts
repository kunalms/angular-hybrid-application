'use strict';

function loginController() {
}

var loginComponent = {
    templateUrl: './login.html',
    controller: loginController,
    controllerAs: '$ctrl',

};
angular.module('myApp.login', ['ngRoute'])
    .component('loginComponent', loginComponent)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            template: '<login-component></login-component>',
        });
    }]);
