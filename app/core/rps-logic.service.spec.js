'use strict';

describe('The RockPaperScissors logic service', function() {
    var RpsLogic;

    beforeEach(module('core'));
    beforeEach(inject(function(_RpsLogic_) {
        RpsLogic = _RpsLogic_;
    }));

    it('can return ten valid hands', function () {
        var validHands = ['scissors', 'paper', 'rock'];
        for (var i = 0; i < 10; i++) {
            expect(validHands).toContain(RpsLogic.randomHand());
        }
    });

    it('has "rock" beating "scissors"', function () {
        expect(RpsLogic.calculateWinner('rock', 'scissors')).toEqual(1);
    });

    it('has "scissors" losing to "rock"', function () {
        expect(RpsLogic.calculateWinner('scissors', 'rock')).toEqual(2);
    });

    it('has "rock" tying with "rock"', function () {
        expect(RpsLogic.calculateWinner('rock', 'rock')).toEqual(0);
    });

    it('has "scissors" beating "paper"', function () {
        expect(RpsLogic.calculateWinner('scissors', 'paper')).toEqual(1);
    });

    it('has "paper" beating "rock"', function () {
        expect(RpsLogic.calculateWinner('paper', 'rock')).toEqual(1);
    });
});
