'use strict';

function View1Controller() {
    var vm = this;
}

var view1Component = {
    templateUrl: 'view1/view1.html',
    controller: View1Controller,
    controllerAs: '$ctrl',

};
angular.module('myApp.view1', ['ngRoute'])
    .component('view1Component', view1Component)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            template: '<view1-component></view1-component>',
        });
    }]);
