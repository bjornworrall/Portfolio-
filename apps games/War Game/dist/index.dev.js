"use strict";

var newDeck = document.getElementById('new-deck');
var drawCards = document.getElementById('draw-cards');
var cardDisplay = document.getElementById('card-display');
var messageEl = document.getElementById("message-el");
var remainingCardsDisplay = document.getElementById("remaining-cards");
var computerEl = document.getElementById('computer-el');
var playerEl = document.getElementById('player-el');
var deckId = '';
var computerScore = 0;
var playerScore = 0;

function handleClick() {
  fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/').then(function (res) {
    return res.json();
  }).then(function (data) {
    deckId = data.deck_id;
    remainingCardsDisplay.textContent = data.remaining;

    if (data.remaining !== 0) {
      drawCards.disabled = false;
    }
  });
}

function handleCard() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/".concat(deckId, "/draw/?count=2")).then(function (res) {
    return res.json();
  }).then(function (data) {
    cardDisplay.children[0].children[1].innerHTML = "\n            <img src='".concat(data.cards[0].image, "' class=\"card\" />\n            ");
    cardDisplay.children[1].children[1].innerHTML = "\n            <img src='".concat(data.cards[1].image, "' class=\"card\" />\n            ");
    messageEl.textContent = determineWinner(data.cards[0], data.cards[1]);
    remainingCardsDisplay.textContent = data.remaining;

    if (data.remaining === 0) {
      drawCards.disabled = true;

      if (computerScore > playerScore) {
        messageEl.textContent = "computer wins the whole thing";
      } else if (computerScore < playerScore) {
        messageEl.textContent = 'player wins the whole thing';
      } else {
        messageEl.textContent = 'game is a tie';
      }
    }
  });
}

newDeck.addEventListener("click", handleClick);
drawCards.addEventListener("click", handleCard);

function determineWinner(card1, card2) {
  var cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
  var card1ValueIndex = cardValue.indexOf(card1.value);
  var card2ValueIndex = cardValue.indexOf(card2.value);

  if (card1ValueIndex > card2ValueIndex) {
    computerScore++;
    computerEl.textContent = computerScore;
    return 'Computer wins';
  } else if (card1ValueIndex < card2ValueIndex) {
    playerScore++;
    playerEl.textContent = playerScore;
    return 'Player 1 wins';
  } else {
    return 'Game is a tie';
  }
}
//# sourceMappingURL=index.dev.js.map
