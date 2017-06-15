
'use strict'

var sms = function(name, phone, date, time){
	const AccountSID = 'ACf817b4f585f4e1327dbe72724b548a88';
	const AuthToken = '7efcb4ba2558466154f8f352c538199c';
    
	var client = require('twilio')(AccountSID,AuthToken);
    var smsBody ="Hi "+name+"\n You appointment has been created for "+
			date+ " at "+ time +"\nThankyou!";
			
	client.messages.create({
		to:phone,
		from:"+14154771446",
		body:smsBody
	
	
	}, function(err,message){
		console.log(message.sid);
	});
}