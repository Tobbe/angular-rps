'use strict';

angular
    .module('topnav')
    .component('topnav', {
        templateUrl: 'topnav/topnav.html',
        controller: Controller,
    });

Controller.$inject = ['$location'];
function Controller($location) {
    var $ctrl = this;

    $ctrl.isActive = function (route) {
        return $location.path().includes('/' + route);
    };
}
