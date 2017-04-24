

var card = [
  {
  	rank:"queen",
  	suit:"diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },{
  	rank:"queen",
  	suit:"hearts",
  	cardImage: "images/queen-of-hearts.png"
  },{
  	rank:"king",
  	suit:"hearts",
  	cardImage: "images/king-of-hearts.png"
  },{
  	rank:"king",
  	suit:"diamonds",
  	cardImage: "images/king-of-diamonds.png"
  }
];
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
	console.log("user flipped "+ card[cardID].rank);
    //
	cardsInPlay.push(card[cardID].rank);
	console.log(cardsInPlay);
    //
	checkForMatch();
};


flipCard(0);
flipCard(2);