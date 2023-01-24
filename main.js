//import { suit, value } from "./card.js";
import Card from "./card.js";

//deck constructor function to be exported to ./game.js
export default function Deck() {


  //this. is referring to the object that "new Deck" would create
  //cards = empty array
  this.cards = [];
    // let i = suit;
    // let j = value;

  //nested for loop
  for (let i = 0; i < 4; i++) {
    // i could = suit, j could = value
    for (let j = 2; j < 15; j++) {
      //this.cards.push pushes a card each time loop runs into cards array
      this.cards.push(new Card({ suit: i, value: j })); //this would create a new card each time the loop runs
      //deck is created
    }
  }
}

function shuffle() {
    //used for loop to count backwards from end of deck
   for (let i = this.deckCount - 1; i > 0; i--) {
    
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldIndex = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldIndex
             };
        };


let deck = new Deck.shuffle()
console.log(deck)

