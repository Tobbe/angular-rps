'use strict';

angular
    .module('rps-2h')
    .component('rockPaperScissors2h', {
        templateUrl: 'rps-2h/rps-2h.html',
        controller: Controller,
    });

Controller.$inject = ['RpsLogic'];
function Controller(RpsLogic) {
    var $ctrl = this;

    $ctrl.humanHand = 'rock';

    $ctrl.play = function () {
        $ctrl.computerHand = RpsLogic.randomHand();
        $ctrl.winner = RpsLogic.calculateWinner(
            $ctrl.humanHand, $ctrl.computerHand);
    };
}
