'use strict';

describe('The RockPaperScissors app', function () {
    beforeEach(function() {
        browser.get('http://127.0.0.1:8000/#/rps-2h');
    });

    it('should have a "Play" button', function () {
        expect(element(by.buttonText('Play')).isPresent()).toBe(true);
    });

    it('should have the first radio button pre-selected', function () {
        var firstRadioButton = element.all(by.tagName('input')).get(0);
        expect(firstRadioButton.isSelected()).toBe(true);
    });

    it('should correctly identify the winner seven times in a row', function () {
        function play() {
            element(by.buttonText('Play')).click();
            var pHand = element(by.css('rock-paper-scissors2h .computer_player p'));
            var pWinner = element(by.css('rock-paper-scissors2h .winner p'));
            pHand.getText().then(function (text) {
                pWinner.getText().then(function (winnerText) {
                    if (text.includes('rock')) {
                        expect(winnerText).toEqual('It\'s a tie');
                    } else if (text.includes('paper')) {
                        expect(winnerText).toEqual('The computer won :(');
                    } else {
                        expect(winnerText).toEqual('You won!');
                    }
                });
            });
        }

        for (var i = 0; i < 7; i++) {
            play();
        }
    });

    it('should not show the computer\'s hand until Play is pressed', function () {
        var computerHand = element(by.css('rock-paper-scissors2h .computer_player p'));

        expect(computerHand.getText()).toEqual('Computer\'s hand: ???');

        element(by.buttonText('Play')).click();

        expect(computerHand.getText()).toMatch(/Computer's hand: (rock|paper|scissors)/);
    });
});
