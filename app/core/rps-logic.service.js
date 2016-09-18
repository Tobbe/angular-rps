'use strict';

angular
    .module('core')
    .service('RpsLogic', function() {
        var orderedHands = ['scissors', 'paper', 'rock'];

        this.randomHand = function () {
            var handIndex = Math.floor(Math.random() * orderedHands.length);
            return orderedHands[handIndex];
        };

        /**
         * Calculates the winner of the two given hands
         *
         * @param {string} playerOne - String reprensentation of player one's hand
         * @param {string} playerTwo - String reprensentation of player two's hand
         * @return {Number} 0 for a tie, 1 if player one is the winner,
         *                  2 if player two is the winner
         */
        this.calculateWinner = function (playerOne, playerTwo) {
            var playerOneHandIndex = orderedHands.indexOf(playerOne);
            var playerTwoHandIndex = orderedHands.indexOf(playerTwo);

            if (playerOneHandIndex === playerTwoHandIndex) {
                return 0;
            }

            if (playerOneHandIndex % 2 === playerTwoHandIndex % 2) {
                if (playerOneHandIndex > playerTwoHandIndex) {
                    return 1;
                } else {
                    return 2;
                }
            } else {
                if (playerOneHandIndex < playerTwoHandIndex) {
                    return 1;
                } else {
                    return 2;
                }
            }
        };
    });
