    let deckId = ''
    let playerScore = 0
    let computerScore = 0

    const remainingCards = document.getElementById('remaining-cards')
    const cardDisplay = document.getElementById('card-display')
    const newDeck = document.getElementById('new-deck')
    const drawCards = document.getElementById('draw-cards')
    const messageEl = document.getElementById('message-el')
    const computerEl = document.getElementById('computer-el')
    const playerEl = document.getElementById('player-el')
    

    function handleDeck() {
        fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id

            remainingCards.textContent = data.remaining
        })
    }

    function handleDraw() {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                cardDisplay.children[0].children[1].innerHTML = `
                <img src="${data.cards[0].image}" class="card" />"
                `
                cardDisplay.children[1].children[1].innerHTML = `
                <img src="${data.cards[1].image}" class="card" />"
                `
               

                 messageEl.textContent  = determineWinner(data.cards[0].value, data.cards[1].value )

                 remainingCards.textContent = data.remaining

                  if (data.remaining === 0) {
                    drawCards.disabled = true
                    if (computerScore > playerScore) {
                        messageEl.textContent = "Computer has won the game 😭"
                    } else if (computerScore < playerScore) {
                        messageEl.textContent = "Player has won the game 🤖"
                    } else {
                        messageEl.textContent = "Game is a tie👽"
                    }
                }
            })

        
    }
    

    function determineWinner(card1, card2) {
        const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]
        const card1ValueIndex = cardValue.indexOf(card1)
        const card2ValueIndex = cardValue.indexOf(card2)

        if (card1ValueIndex > card2ValueIndex) {
            computerScore++
            computerEl.textContent = computerScore
            return "Computer Wins"
        } else if (card1ValueIndex < card2ValueIndex) {
            playerScore++
            playerEl.textContent = playerScore
            return "Player Wins"
        } else {
            return "Game is a tie"
        }


    }

    newDeck.addEventListener("click", handleDeck)
    drawCards.addEventListener('click', handleDraw)
 