Selenium.prototype.doStoreRandom = function(_varname, _range){
  var random = Math.floor(Math.random() * _range);
  storedVars[_varname] = random;
}

// var i = 0;

// Selenium.prototype.doAddInfo = function(_varname, _address) {
// 	var arr = new Array();
// 	arr[i] = _address;
// 	i += 1;
// 	var result = '';
// 	for (j=0; j<array.lenth; j++) {
// 		result += array[j] + '\n';
// 	}
// 	storedVars[_varname] = result;
// }