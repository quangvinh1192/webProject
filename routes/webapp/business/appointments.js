var crypto = require('crypto');
var baby = require('babyparse');
var async = require('async');
// var sendgrid  = require('sendgrid')('robobetty', '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');
var sendgrid = require('sendgrid')('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');
var ObjectId = require('mongodb').ObjectID;
const AccountSID = 'ACf817b4f585f4e1327dbe72724b548a88';
const AuthToken = '7efcb4ba2558466154f8f352c538199c';
var SMS = require('./sms');
const nodemailer = require('nodemailer');

var client = require('twilio')(AccountSID,AuthToken);


 /**
 * Takes a req and res parameters and is inputted into function to get appointment data.
 *
 * @param req and res The two parameters passed in to get the appropriate appointments,
 * @returns The appropriate data about the appointment
 */
exports.get = function(req,res){

  var appointmentsList;

  async.parallel({
      appointments: function(cb) {
          req.db.get('appointments').find({
            businessID: req.user[0].business
          }, function (err,results){

              if (err) {
                  console.log("Error finding appontments")
                  return next(err);
              }
              if(!results) {
                  return next(new Error('Error finding appontments'));
              }

               appointmentsList = results;
              //  console.log('Found some not-registered employees');
              //  console.log(notemployee);
               cb();
          });
      }
  },

  function(err,results){

      if(err){
          throw err;
      }

      res.render('business/appointments', {
          title: 'Appointments',
          isOwner: req.user[0].admin,
          businessId: req.user[0].business,
          appointments: "active",
          appointmentsList: appointmentsList
      });

  });

}

/**
 * Takes a req and res parameters and is inputted into function to get appointment data.
 *  Allows the User to input specified data and make changes
 * @param req and res The two parameters passed in to get the apprporiate appointments,
 * @returns The appropriate data about the appointment
 */
exports.post = function(req,res,next){
  // grab the appointments table from db
  var appointments = req.db.get('appointments');
  // grab the body of the data from the form
  // var formData = req.body;


  var smsBody ="Hi "+req.body.inputName+"\n You appointment has been created for "+
			req.body.inputDate+ " at "+ req.body.inputTime +"\nThankyou!";

  appointments.insert({
    name: req.body.inputName,
    time: req.body.inputTime,
    date: req.body.inputDate,
    email: req.body.inputEmail,
    phone: req.body.inputPhone,

    checkin: "no",
    checkinTime: "",

    businessID: req.user[0].business,
  }, function (err, result) {
    if (err) {
      throw err;
    }
  });


  	client.messages.create({
		to:req.body.inputPhone,
		from:"+14154771446",
		body: smsBody


	}, function(err,message){
		console.log(err);
	});

	var transporter = nodemailer.createTransport({
	service: 'Gmail',
		auth:{
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
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
    console.log('Message %s sent: %s', info.messageId, info.response);
	});


	res.redirect('/appointments');

}
