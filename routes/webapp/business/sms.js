'use strict';

module.exports.sms = function(req,res){
	const AccountSID = 'ACf817b4f585f4e1327dbe72724b548a88';
	const AuthToken = '7efcb4ba2558466154f8f352c538199c';

	var client = require('twilio')(AccountSID,AuthToken);
	var smsBody ="Hi "+req.body.inputName+"\n You appointment has been created for "+
			req.body.inputDate+ " at "+ req.body.inputTime +"\nThankyou!";

	client.messages.create({
		to:req.body.inputPhone,
		from:"+14154771446",
		body:smsBody


	}, function(err,message){
		if(err) {
			console.log(err.message);
		}
		else{
			console.log(message.sid);
		}

	});

}
