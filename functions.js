var getDieRoll = function(dieSize) {
	console.log(dieSize);
	return Math.ceil(dieSize * Math.random());
};

var firstDie = getDieRoll();
var secondDie = getDieRoll(4);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);
