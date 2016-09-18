'use strict';

angular
    .module('rps')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when('/rps-mvp', {
                template: '<rock-paper-scissors></rock-paper-scissors>',
            })
            .when('/rps-2h', {
                template: '<rock-paper-scissors2h></rock-paper-scissors2h>',
            })
            .when('/rps-for-fun', {
                template: '<rock-paper-scissors-for-fun></rock-paper-scissors-for-fun>',
            })
            .otherwise('/rps-for-fun');
    }]);
