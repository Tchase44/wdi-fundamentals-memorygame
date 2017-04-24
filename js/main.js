

var card = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = card[0];
cardsInPlay.push(cardOne);

var cardTwo = card[1];
cardsInPlay.push(cardTwo);

console.log("user flipped "+cardsInPlay[0]);
console.log("user flipped "+cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You Found a Match!!!");
	}else{
		alert("Sorry try again");
	};
};
