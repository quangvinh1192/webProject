// 'use strict';
module.exports.isValidName = function(name){
    if (name.length < 1 && name.length > 30) {
		return false;
	}

	var strAllowedRegex,boolVerifiedResult;

	// storing the allowed characters into a variable as a regular expression.
	strAllowedRegex = /^[a-zA-Z ]+$/;
	// call Javascript's RegExp Object's method test to check if the username is valid
	boolVerifiedResult = strAllowedRegex.test(name);
	return boolVerifiedResult;

}
module.exports.phone = function(phone){
    if (phone.length != 10) {
		return false;
	}

	var strAllowedRegex,boolVerifiedResult;

	// storing the allowed characters into a variable as a regular expression.
	strAllowedRegex = /^[0-9]+$/;
	// call Javascript's RegExp Object's method test to check if the username is valid
	boolVerifiedResult = strAllowedRegex.test(phone);
	return boolVerifiedResult;

}
