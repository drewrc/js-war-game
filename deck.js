//imported variables/functions
import {SUITS, VALUES} from "./card.js"
import Card from "./card.js"


//deck constructor function to be exported to ./game.js
export default class Deck {
    //set cards = freshdeck function for a deck/array of 52 cards
    constructor(cards = freshDeck()) { 
        this.cards = cards
    }   

// using a 'getter' statement to return object property of card length aka card #
    get deckCount() {
        return this.cards.length
    }

    //return top card from deck using shift

    pop(){
        return this.cards.shift();
      };
      
    //add cards to bottom of deck
    push(card) {
        this.cards.push(card);
      }

    shuffle() {

        //used for loop to count backwards from end of deck
       for (let i = this.deckCount - 1; i > 0; i--) {
        
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldIndex = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldIndex
                 };
            };



        };




function freshDeck() {
    //.flatmap() condenses multiple arrays into one arrray 
    return SUITS.flatMap(suit => {
        //.map() returns new array of suit + value
        return VALUES.map(value => {
            return new Card(suit, value);
        });
    });
};


