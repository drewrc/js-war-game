export const suit = ["♠", "♣", "♦", "♥"];
export const value = [
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
  "K",
];



//card constructor combines suit and value in order to create a card

export default function Card({ value, suit }) {
  this.value = value;
  this.suit = suit;
}

