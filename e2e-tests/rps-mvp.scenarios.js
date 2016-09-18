'use strict';

describe('The RockPaperScissros app', function () {
    beforeEach(function() {
        browser.get('http://127.0.0.1:8000/#/rps-mvp');
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
            var pTags = element.all(by.css('rock-paper-scissors > div p'));
            pTags.get(0).getText().then(function (text) {
                pTags.get(1).getText().then(function (winnerText) {
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
});
