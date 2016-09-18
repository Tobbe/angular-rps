'use strict';

describe('The RockPaperScissros app', function () {
    beforeEach(function() {
        browser.get('http://127.0.0.1:8000/#/rps-for-fun');
    });

    it('should have a "Play" button', function () {
        expect(element(by.buttonText('Play')).isPresent()).toBe(true);
    });

    it('should have the first radio button pre-selected', function () {
        var firstRadioButton = element.all(by.tagName('input')).get(0);
        expect(firstRadioButton.isSelected()).toBe(true);
    });

    it('should not show the computer\'s hand until Play is pressed and animation has run', function () {
        var pComputerHand = element(by.css('rock-paper-scissors-for-fun .computer_player p'));
        var imgComputerHand = element.all(by.tagName('img')).get(3);

        expect(pComputerHand.getText()).toEqual('Computer\'s hand: undecided');
        expect(imgComputerHand.getAttribute('src')).toMatch('hand_undecided\.png');

        browser.ignoreSynchronization = true;
        element(by.buttonText('Play')).click();
        browser.sleep(500);

        expect(pComputerHand.getText()).toEqual('Computer\'s hand: undecided');
        expect(imgComputerHand.getAttribute('src')).toMatch('hand_undecided\.png');

        browser.sleep(1500);

        expect(pComputerHand.getText()).toMatch(/Computer's hand: (rock|paper|scissors)/);
        expect(imgComputerHand.getAttribute('src')).toMatch('(rock|paper|scissors)\.png');

        browser.ignoreSynchronization = false;
    });

    it('should disable the Play button while animation is running', function () {
        browser.ignoreSynchronization = true;
        element(by.buttonText('Play')).click();
        browser.sleep(500);

        expect(element(by.buttonText('Play')).isEnabled()).toBe(false);

        browser.sleep(1500);

        expect(element(by.buttonText('Play')).isEnabled()).toBe(true);

        browser.ignoreSynchronization = false;
    });
});
