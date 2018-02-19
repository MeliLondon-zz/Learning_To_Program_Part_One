var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random())
	return result;
};

var roll = getDieRoll(6);

while(roll < 4) {
	console.log(roll);
	roll = getDieRoll(6);
}

do {
	roll = getDieRoll(6);
	console.log(roll);
} while(roll > 4);


if(roll >= 3 && roll <= 5){
	console.log("Great roll!");
}
else if(roll == 1) {
	console.log("Terrible roll");
} 
else{
	console.log("That was an ok roll");
}

console.log("You rolled a " + roll);
