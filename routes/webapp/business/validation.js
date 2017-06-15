'use strict';
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

module.exports.date = function(date){
    var d = new Date();
    if (d <= date) {
        return true;
    }
    else{
        return false;
    }
}

module.exports.time = function(time){
    var valid = (time.search(/^\d{2}:\d{2}$/) != -1) &&
            (time.substr(0,2) >= 0 && time.substr(0,2) <= 24) &&
            (time.substr(3,2) >= 0 && time.substr(3,2) <= 59)
    return valid;
}
