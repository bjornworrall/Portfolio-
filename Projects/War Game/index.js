
const newDeck = document.getElementById('new-deck')
const drawCards = document.getElementById('draw-cards')
const cardDisplay =  document.getElementById('card-display')
const messageEl = document.getElementById("message-el")
const remainingCardsDisplay = document.getElementById("remaining-cards")
const computerEl = document.getElementById('computer-el')
const playerEl = document.getElementById('player-el')
let deckId = ''
let computerScore = 0
let playerScore = 0


function handleClick() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id
        remainingCardsDisplay.textContent = data.remaining

        if (data.remaining !== 0) {
            drawCards.disabled = false
              
           }
           
    })
  
}


function handleCard() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardDisplay.children[0].children[1].innerHTML = `
            <img src='${data.cards[0].image}' class="card" />
            `
            cardDisplay.children[1].children[1].innerHTML = `
            <img src='${data.cards[1].image}' class="card" />
            `
           
           messageEl.textContent = determineWinner(data.cards[0], data.cards[1])
           remainingCardsDisplay.textContent = data.remaining
          
           if (data.remaining === 0) {
            drawCards.disabled = true
            if (computerScore > playerScore) {
                messageEl.textContent = "computer wins the whole thing"
            } else if (computerScore < playerScore) {
                messageEl.textContent = 'player wins the whole thing'
            } else {
                messageEl.textContent = 'game is a tie'
            }
           }
        })

}

newDeck.addEventListener("click", handleClick)



drawCards.addEventListener("click", handleCard)


 function determineWinner(card1, card2) {
     const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", 
     "10", "JACK", "QUEEN", "KING", "ACE"]
     const card1ValueIndex = cardValue.indexOf(card1.value)
     const card2ValueIndex = cardValue.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
       computerEl.textContent = computerScore
        return 'Computer wins'
    } else if (card1ValueIndex < card2ValueIndex) {
        playerScore++
       playerEl.textContent = playerScore
        return 'Player 1 wins'
    } else {
        return 'Game is a tie'
    }
      
    

 }

