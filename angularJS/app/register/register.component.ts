'use strict';

function RegisterController() {
}

var view1Component = {
    templateUrl: './register.html',
    controller: RegisterController,
    controllerAs: '$ctrl',
};
angular.module('myApp.register', ['ngRoute'])
    .component('registerComponent', view1Component)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            template: '<register-component></register-component>',
        });
    }]);
