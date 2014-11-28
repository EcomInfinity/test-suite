Selenium.prototype.doStoreRandom = function(_varname, _range){
  var random = Math.floor(Math.random() * _range);
  storedVars[_varname] = random;
}