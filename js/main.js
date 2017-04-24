

var card = ["queen","queen","king","king"];
var cardsInPlay = [];


var checkForMatch = function(){

	if (cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You Found a Match!!!");
		}else{
			alert("Sorry try again");
		};
	};
};

var flipCard = function(cardID) {
	// 
	console.log("user flipped "+ card[cardID]);
    //
	cardsInPlay.push(card[cardID]);
    //
	checkForMatch();
};


flipCard(0);
flipCard(2);