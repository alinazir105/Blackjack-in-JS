let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
//query selector is more broader, you can get classes or ids by mentioning their selectors
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Ali",
    chips: 145
}
let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips
//perfect scenario: sum = 21
//ok scenario: sum < 21
//worst scenario: sum > 21
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("Drawing a new card from the deck")
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}