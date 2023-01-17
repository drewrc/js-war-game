//creating a full deck of 52 cards
//suit array
export const SUITS = ["♠", "♣", "♦", "♥"];
//values array 
export const VALUES = [
    "A", 
    "2", 
    "3",
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9", 
    "10",
    "J", 
    "Q", 
    "K"
];




//card constructor combines suit and value in order to create a card 

export default class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }


//'getter' statement binds an object property to function that gets called when function is called

get color() {
//check whether suit is spade or diamond ?
//get color returns white if card is spade or diamond, other symbols will be black

    return this.suit === '♠' || this.suit === '♦' ? 'white' : 'black';
};


//this function creates a new HTML element for the cards created by the script
     getHTML(){

    //created constant 'cardDiv' and declared equal to new div element using .createElement 
        const cardDiv = document.createElement('div')

        //target inner text w/ suit type of card
        cardDiv.innerText = this.suit

        //target class and use .add card and color assigned to card
        cardDiv.classList.add("card", this.color)

        //.dataset allows the data attribute to be given value and suit of card
        cardDiv.dataset.value = `${this.value} ${this.suit}`

        return cardDiv
    };
    

};
