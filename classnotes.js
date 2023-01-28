//main.js -> import game -> not needed ***
//game js -> import player & deck
//deck js -> import card 

//step 1: constructor functions

function Card({value, suit}) {
this.value = values;
this.suit = suit; 
}

function Deck() {
    //this. is referring to the object that "new Deck" would create 
    //cards = empty array
this.cards = [];

//nested for loop 
for (let i = 0; i < 4; i++) { // i could = suit, j could = value
    for (let j = 2; j <15; j++) {
        //this.cards.push pushes a card each time loop runs into cards array 
        this.cards.push(new Card({ suit: i, value: j})); //this would create a new card each time the loop runs
        //deck is created 
    }
}

}

//**properties = values, methods = functions 

function Player({ name } = {}) { //empty brackets -> "destructuring" name off object that gets passed in
this.name = name;               //if no object gets passed in, empty object bc name undefined - by default use empty obj- will not error 
this.hand = [];
}

//define Game 

function Game() {

    //returns empty new player object when no properties are attached to it 

    //new player is a new object with a name and a hand properties 
    this.player1 = new Player({
        name: 'Sally',
    });

    this.player2 = new Player({
        name: 'Charlie',
    });
    //two players are created 

}



Game.prototype.shuffle = function(deck) {

    let i = deck.length, 
    j, 
    temp;

    while(i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = deck[i]
        deck[i] = temp
        temp = deck [i]
    }
    this.deck = new Deck();
    //set pot equal to empty array, this is where the cards go when the round starts/cards get flipped 
    this.pot = [ ];
}

//a do loop will run at least once and then check condition, a while loop will run as long as condition is filled 

Game.prototype.deal = function() {
//each player gets 26 cards 
//deck is object w/ property of cards
    this.player1.hand = this.deck.cards.filter(function (card, index){
        //filter is looking for true or false -> if truthy -> scoops value into new array 
        return !(index % 2);
        //looks at remainder of an index/2 using %; returns either a remainder 0 or a 1
    });
        //^ player 1 gets first, odd remander of 1, even remainder of 0
    this.player2.hand = this.deck.cards.filter(function (card, index){
        return index % 2; 

    });
    //you can add an object to create card count or use cardCount = .hand.length 
    this.player1.cardCount = 26;
    this.player2.cardCount = 26;

};

Game.prototype.compare = function() {
    //player1 card value -> player 1 card will be index 0 because p1 goes first/player 2 will be index 2 because p2 goes second
    if(this.pot[0].value > this.pot[1].value) {
        //player 1 wins this condition, so player 1's hand wins the round/cards
        this.player1.hand = [...this.player1.hand, ...this.pot]
        //then empty pot ->
        this.pot = [];
    } else if (this.pot[0].value < this.pot[1].value) {
        this.player2.hand = [...this.player2.hand, ...this.pot];
        this.pot = [];
    } else {
        //code for simple version of game -> tie 
       // this.player1.hand = [...this.player1.hand, ...this.pot];
       // this.pot = [];
       this.pot = [
        //splice from [i] = [0] to [i] = [3]
        //splice mutates the original array and removes the 3 cards, 
        ...this.player1.hand.splice(0, 3), 
        ...this.player2.hand.splice(0, 3), 
        ...this.pot,
        ];
        //six cards are added to the pot 

    }

}

Game.prototype.draw = function() {
//could use while loop ->
// while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {...

    const player1Card = this.player1.hand.shift(); //shift() removes first card of array 
    const player2Card = this.player2.hand.shift();
//using shift() adds p1 and p2 cards (2) to the pot 
    this.pot = [player1Card, player2Card, ...this.pot];

//call compare() at end to compare after pressing draw button 
    this.compare();
};




Game.prototype.play = function() {
this.shuffle(this.deck);
this.deal();
this.draw();
}

const game = new Game(); 
game.play();

//javascript will run game in 1sec w/o adding addEventListeners and click events 


/////////////////////////////////////////CODE NOT WORKING///////////////////////////////////
import Deck from "./deck.js";
import Player from "./player.js";
import Card from "./card.js";

function Game() {
  //returns empty new player object when no properties are attached to it
  //new player is a new object with a name and a hand properties

  this.player1 = new Player({
    name: 'Player 1',
  });

  this.player2 = new Player({
    name: 'Player 2',
  });

  this.deck = new Deck()

}


const game = new Game()
console.log(game.deck)

Game.prototype.shuffle = function () {

  let i = this.deck.cards.length,
    j,
    temp;

  //let i = deck.length, count back from deck.length
  while (i--) {
    //let j = an integer rounded to the lowest nearest whole number after
    //taking the sum of i and multiplying it by a random number 0>0.9
    j = Math.floor(Math.random() * (i + 1));
    //replace the original value w/ new value
    temp = this.deck.cards[i];
    this.deck.cards[i] = this.deck.cards[j];
    console.log('testing')
    this.deck.cards[j] = temp;
  }
  //set pot equal to empty array, this is where the cards go when the round starts/cards get flipped
  this.pot = [];
};

//const shuffleCards = sdhuffle()


Game.prototype.deal = function () {
  //each player gets 26 cards
  //deck is object w/ property of cards
  this.player1.hand = this.deck.cards.filter(function (card, index) {
    //filter is looking for true or false -> if truthy -> scoops value into new array
    return !(index % 2);
    //looks at remainder of an index/2 using %; returns either a remainder 0 or a 1
  });
  //console.log(this.player1.hand)
  //^ player 1 gets first, odd remander of 1, even remainder of 0
  this.player2.hand = this.deck.cards.filter(function (card, index) {
    return index % 2;
  });

  //console.log(this.player2.hand)
  //you can add an object to create card count or use cardCount = .hand.length
  //this.player1.hand = 26;
  //this.player2.hand = 26;
};



Game.prototype.compare = function () {
 
 
  //player1 card value -> player 1 card will be index 0 because p1 goes first/player 2 will be index 2 because p2 goes second
  if (this.pot[0].value > this.pot[1].value) {
    //player 1 wins this condition, so player 1's hand wins the round/cards
    this.player1.hand = [...this.player1.hand, ...this.pot];
    //then empty pot ->
    this.player1.hand.push(this.pot);
    this.pot = [];
    console.log(alert('Player 1 Winner!'))
    //console.log(this.player1.hand)
  } else if (this.pot[0].value < this.pot[1].value) {
    this.player2.hand = [...this.player2.hand, ...this.pot];
    this.player2.hand.push(this.pot);
    this.pot = [];
    console.log(alert('Player 2 Winner!'))

    //console.log(this.player2.hand)
  } else if (this.pot[0].value === this.pot[1].value){
    if (this.player1.hand < 3){
     alert('Player 2 Wins');
    } else if (this.player2.hand < 3){
      alert('Player 1 Wins');
    }
  }
    //code for simple version of game -> tie
    // this.player1.hand = [...this.player1.hand, ...this.pot];
    // this.pot = [];
     {
    this.pot = [
      //splice from [i] = [0] to [i] = [3]
      //splice mutates the original array and removes the 3 cards,
      ...this.player1.hand.splice(0, 3),
      ...this.player2.hand.splice(0, 3),
      ...this.pot,
    ];}
    
    console.log(this.player2.hand)
    console.log(this.player1.hand)
    //six cards are added to the pot
  };


Game.prototype.draw = function () {
  //could use while loop ->
  // while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {...

  const player1Card = this.player1.hand.shift(); //shift() removes first card of array
  console.log(player1Card)
  const player2Card = this.player2.hand.shift();
  console.log(player2Card)
  //using shift() adds p1 and p2 cards (2) to the pot
  this.pot = [player1Card, player2Card, ...this.pot];
  //call compare() at end to compare after pressing draw button
  this.compare();
};




Game.prototype.play = function () {
  this.shuffle();
  this.deal();
 
  console.log(this.player1.hand, this.player2.hand)
 };

 Game.prototype.round = function () {
  console.log(this.player1.hand, this.player2.hand)
 }


const startGame = document.querySelector('.startgame')
const newRound = document.querySelector('.draw');
const playerOneSuitValue = document.querySelector('.player-one-card')




startGame.addEventListener('click', function () {
game.play()
});

newRound.addEventListener('click', function () {
  game.draw()
  });





//const game = new Game();
//console.log(Game.play())

