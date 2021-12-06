"use strict";

var deckId = '';
var playerScore = 0;
var computerScore = 0;
var remainingCards = document.getElementById('remaining-cards');
var cardDisplay = document.getElementById('card-display');
var newDeck = document.getElementById('new-deck');
var drawCards = document.getElementById('draw-cards');
var messageEl = document.getElementById('message-el');
var computerEl = document.getElementById('computer-el');
var playerEl = document.getElementById('player-el');

function handleDeck() {
  fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/').then(function (res) {
    return res.json();
  }).then(function (data) {
    deckId = data.deck_id;
    remainingCards.textContent = data.remaining;
  });
}

function handleDraw() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/".concat(deckId, "/draw/?count=2")).then(function (res) {
    return res.json();
  }).then(function (data) {
    cardDisplay.children[0].children[1].innerHTML = "\n                <img src=\"".concat(data.cards[0].image, "\" class=\"card\" />\"\n                ");
    cardDisplay.children[1].children[1].innerHTML = "\n                <img src=\"".concat(data.cards[1].image, "\" class=\"card\" />\"\n                ");
    messageEl.textContent = determineWinner(data.cards[0].value, data.cards[1].value);
    remainingCards.textContent = data.remaining;

    if (data.remaining === 0) {
      drawCards.disabled = true;

      if (computerScore > playerScore) {
        messageEl.textContent = "Computer has won the game 😭";
      } else if (computerScore < playerScore) {
        messageEl.textContent = "Player has won the game 🤖";
      } else {
        messageEl.textContent = "Game is a tie👽";
      }
    }
  });
}

function determineWinner(card1, card2) {
  var cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
  var card1ValueIndex = cardValue.indexOf(card1);
  var card2ValueIndex = cardValue.indexOf(card2);

  if (card1ValueIndex > card2ValueIndex) {
    computerScore++;
    computerEl.textContent = computerScore;
    return "Computer Wins";
  } else if (card1ValueIndex < card2ValueIndex) {
    playerScore++;
    playerEl.textContent = playerScore;
    return "Player Wins";
  } else {
    return "Game is a tie";
  }
}

newDeck.addEventListener("click", handleDeck);
drawCards.addEventListener('click', handleDraw);
//# sourceMappingURL=practice.dev.js.map
