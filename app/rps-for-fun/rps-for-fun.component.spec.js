'use strict';

describe('The rockPaperScissorsForFun component', function() {
    beforeEach(module('rps-for-fun'));

    describe('controller', function() {
        var $ctrl;
        var $timeout;

        beforeEach(inject(function($componentController, _$timeout_) {
            $ctrl = $componentController('rockPaperScissorsForFun');
            $timeout = _$timeout_;
        }));

        it('should set the computer\'s hand when calling play()', function () {
            var validHands = ['rock', 'paper', 'scissors'];
            $ctrl.play();
            $timeout.flush();
            expect(validHands).toContain($ctrl.computerHand);
        });

        it('should set the winner when calling play()', function () {
            var winner = [0, 1, 2];
            $ctrl.humanHand = 'rock';
            $ctrl.play();
            $timeout.flush();
            expect(winner).toContain($ctrl.winner);
        });
    });
});

