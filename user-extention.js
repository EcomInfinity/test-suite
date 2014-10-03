Selenium.prototype.doStoreRandom = function(variableName){
random = Math.floor(Math.random()*100000);
storedVars[variableName] = random;
}