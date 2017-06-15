// 'use strict';
var nodemailer = require('nodemailer');

module.exports.email = function(req,smsBody){
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user:'cse112team8@gmail.com',
            pass: 'fubarForPeter'
        }
    });

	// setup email data with unicode symbols
	var mailOptions = {
		from: 'Enque <cse112team8@gmail>', // sender address
		to: req.body.inputEmail, // list of receivers
		subject: 'Appointment Confirmation', // Subject line
		text: smsBody,

	};

	// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

        // console.log('Message sent: ' + info.response);
    });

}
