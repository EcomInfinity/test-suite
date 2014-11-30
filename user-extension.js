Selenium.prototype.doStoreRandom = function(_varname, _range){
  var random = Math.floor(Math.random() * _range);
  storedVars[_varname] = random;
}

Selenium.prototype.doAddInfo = function(_varname, _info) {
  if (typeof storedVars[_varname] === 'undefined') {
    storedVars[_varname] = [];
  }
	storedVars[_varname].push(_info);
}

Selenium.prototype.doClearInfo = function(_varname){
	storedVars[_varname] = [];
}