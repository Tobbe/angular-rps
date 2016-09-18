'use strict';

describe('The rockPaperScissors component', function() {
    beforeEach(module('rps-mvp'));

    describe('controller', function() {
        var $ctrl;

        beforeEach(inject(function($componentController) {
            $ctrl = $componentController('rockPaperScissors');
        }));

        it('should set the computer\'s hand when calling play()', function () {
            var validHands = ['rock', 'paper', 'scissors'];
            $ctrl.play();
            expect(validHands).toContain($ctrl.computerHand);
        });

        it('should set the winner when calling play()', function () {
            var winner = [0, 1, 2];
            $ctrl.humanHand = 'rock';
            $ctrl.play();
            expect(winner).toContain($ctrl.winner);
        });
    });
});

