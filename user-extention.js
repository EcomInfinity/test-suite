Selenium.prototype.doStoreRandom = function(variableName){
// random = Math.floor(Math.random()*10);
var random = 0;
while (true) {
	random = Math.floor(Math.random()*10);
	if (random >5) {
		continue;
	}else {
		break;
	}
}

storedVars[variableName] = random;
}