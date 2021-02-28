'use strict';

function RegisterController(dgdAlertService) {
    var vm = this;

    vm.submitForm = function () {
        dgdAlertService.show("User registration with email "+ vm.user.email + " was successful!");
    }
}

var view1Component = {
    templateUrl: './register.html',
    controller: RegisterController
};
angular.module('myApp.register', ['ngRoute'])
    .component('registerComponent', view1Component)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            template: '<register-component></register-component>',
        });
    }]);
