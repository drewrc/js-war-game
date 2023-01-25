import { suit, value } from "./card.js";
import Card from "./card.js";

//deck constructor function to be exported to ./game.js
export default function Deck() {


  //this. is referring to the object that "new Deck" would create
  //cards = empty array
  this.cards = [];
    // let i = suit;
    // let j = value;

  //nested for loop
  for (let i = 0; i < suit.length; i++) {
    // i could = suit, j could = value
    for (let j = 0; j < value.length; j++) {
      //this.cards.push pushes a card each time loop runs into cards array
      this.cards.push(new Card({ suit: suit[i], value: value[j] })); //this would create a new card each time the loop runs
      //deck is created
    }
  }
}


console.log(new Deck ())


