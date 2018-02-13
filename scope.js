var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random())
	return result; //local scope
};

var showResult = function() {
	console.log(firstDie);
	console.log(secondDie);
	console.log(firstDie + secondDie);	
};

var firstDie = getDieRoll(12);  //global scope
var secondDie = getDieRoll(10); //global scope
showResult();
