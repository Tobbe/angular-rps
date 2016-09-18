'use strict';

angular
    .module('rps-for-fun')
    .component('rockPaperScissorsForFun', {
        templateUrl: 'rps-for-fun/rps-for-fun.html',
        controller: Controller,
    });

Controller.$inject = ['$timeout', '$anchorScroll', 'RpsLogic'];
function Controller($timeout, $anchorScroll, RpsLogic) {
    var $ctrl = this;

    $ctrl.humanHand = 'rock';
    $ctrl.computerHand = 'undecided';

    $ctrl.play = function () {
        $ctrl.computerHand = 'undecided';
        $ctrl.animate = true;
        $timeout(function () {
            $ctrl.animate = false;
            $ctrl.computerHand = RpsLogic.randomHand();
            $ctrl.winner = RpsLogic.calculateWinner(
                $ctrl.humanHand, $ctrl.computerHand);
            $timeout(function () {
                $anchorScroll('winner');
            });
        }, 1800);
    };
}
