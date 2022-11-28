
//MOBILE MENU JAVASCRIPT

let mobileBtn = document.getElementById('mobile-cta')
let nav = document.querySelector('nav')
let mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})

//BLACKJACK JAVASCRIPT

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like another card?"
    } else if (sum === 21) {
        message = "BLACKJACK!!"
        hasBlackJack = true
    } else {
        message = "You lost, play again!"
        isAlive = false
    }
    messageEl.textContent = message
}

if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else {

    }
}
