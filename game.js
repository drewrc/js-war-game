//this is the module for this assignment 

//imports from other scripts--->
import Deck from "./deck.js"
import {playerOneCardFace, playerTwoCardFace, playerOneDeck, playerTwoDeck} from "./player.js"

//list new declared variables
const text = document.querySelector('.text');

let playerOne, playerTwo, clickRound;

//event listener for new round 
document.addEventListener('click', () => {
  if (clickRound) {
    resetRound();
  } else {
    newCard();
  };
});

//still working on code below

function startGame() {
  const deck = new Deck()
  deck.shuffle();

  //constant to divide deck in half
  const halfDeck = deck.deckCount/2;

  playerOne = new Deck (deck.cards.slice(0, halfDeck));
  playerTwo = new Deck (deck.cards.slice(halfDeck, deck.deckCount));


  //default for clickRound is declared here
  clickRound = false;


  resetGame();

}

startGame();
//playerOneCard.appendChild(deck.cards[0].getHTML())


function resetGame() {
  playerOneCardFace.innerHTML = ' ';
  playerTwoCardFace.innerHTML = ' ';
  text.innerText = ' ';
  clickRound = false;

  resetRound ();
}

function resetRound() {
  playerOneDeck.innerText = playerOne.deckCount;
  playerTwoDeck.innerText = playerTwo.deckCount;
}

function newCard() {
clickRound = true; 

}



