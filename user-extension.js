Selenium.prototype.doStoreRandom = function(_varname, _range){
  var random = Math.floor(Math.random() * _range);
  storedVars[_varname] = random;
};

Selenium.prototype.doStoreDate = function(_varname) {
  var _date = new Date(),
      _year = _date.getFullYear(),
      _month = _date.getMonth(),
      _day = _date.getDay(),
      _hours = _date.getHours(),
      _minutes = _date.getMinutes(),
      _secodes = _date.getSeconds();

  storedVars[_varname] = _year + '-' + _month + '-' + _day + '-' + _hours + '-' + _minutes + '-' + _secodes;
};

Selenium.prototype.doAddInfo = function(_varname, _info) {
  if (typeof storedVars[_varname] === 'undefined') {
    storedVars[_varname] = [];
  }
	storedVars[_varname].push(_info);
};

Selenium.prototype.doClearInfo = function(_varname){
	storedVars[_varname] = [];
};