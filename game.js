//this is the module for this assignment 

//imports from other scripts--->
import Deck from "./deck.js"
import {playerOneCardSlot, playerTwoCardSlot, playerOneDeckElement, playerTwoDeckElement} from "./player.js"

//map from value = string to figure out which is greatest
const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
}

//list new declared variables
const text = document.querySelector('.text');




let playerOneDeck, playerTwoDeck, clickRound, stop;

//event listener for new round 
document.addEventListener('click', () => {

  //restarts the game if game ends
  if (stop) {
    startGame()
    return
  }
  if (clickRound) {
    resetRound();
  } else {
    flipCard();
  };
});

//still working on code below





function startGame() {
  const deck = new Deck()
  deck.shuffle();

  //constant to divide deck in half
  const halfDeck = deck.deckCount/2;

  //deck for p1, p2
  playerOneDeck = new Deck (deck.cards.slice(0, halfDeck));
  playerTwoDeck = new Deck (deck.cards.slice(halfDeck, deck.deckCount));


  //default for clickRound is declared here
  clickRound = false;
  //default for stop 
  stop = false;

  resetRound();


  
}

startGame();
//playerOneCard.appendChild(deck.cards[0].getHTML())


function resetRound() {
  playerOneCardSlot.innerHTML = ' ';
  playerTwoCardSlot.innerHTML = ' ';
  text.innerText = ' ';
  clickRound = false;

  updateDeckCount ();
};



function updateDeckCount() {

playerOneDeckElement.innerText = playerOneDeck.deckCount;
playerTwoDeckElement.innerText = playerTwoDeck.deckCount;


}





function flipCard() {
clickRound = true; 


const playerOneCard = playerOneDeck.pop()
const playerTwoCard = playerTwoDeck.pop()

playerOneCardSlot.appendChild(playerOneCard.getHTML())
playerTwoCardSlot.appendChild(playerTwoCard.getHTML())

updateDeckCount();

//play the game

if (roundWinner(playerOneCard, playerTwoCard)) {

//player 1 wins 
  text.innerText = "Player 1 Wins!";
  playerOneDeck.push(playerOneCard);
  playerOneDeck.push(playerTwoCard);
//Player 2 wins
} else if  (roundWinner(playerTwoCard, playerOneCard)) {
  text.innerText = "Player 2 Wins!";
  playerTwoDeck.push(playerOneCard);
  playerTwoDeck.push(playerTwoCard);
//tie
} else {
  text.innerText = "Tie!";
  playerOneDeck.push(playerOneCard);
  playerTwoDeck.push(playerTwoCard);
};


//game ends->


if (noCardsLeft(playerOneDeck)) {
  text.innerText = "Player 1 Loses!! Player 2 Wins!!";
  stop = true;
  } else if (noCardsLeft(playerTwoDeck)) {
    text.innerText = "Player 2 Loses!! Player 1 Wins!!"
    stop = true;
  };
};

//this function 
function noCardsLeft(deck) {
  return deck.deckCount === 0;

}


function roundWinner(cardOne, cardTwo) {
return CARD_VALUE_MAP [cardOne.Value] > CARD_VALUE_MAP[cardTwo.value]

}

