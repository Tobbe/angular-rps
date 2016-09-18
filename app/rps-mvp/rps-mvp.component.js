'use strict';

angular
    .module('rps-mvp')
    .component('rockPaperScissors', {
        templateUrl: 'rps-mvp/rps-mvp.html',
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
