var crypto = require('crypto');
var baby = require('babyparse');
var async = require('async');
// var sendgrid  = require('sendgrid')('robobetty', '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');
var sendgrid = require('sendgrid')('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');
var ObjectId = require('mongodb').ObjectID;

 /**
 * Takes a req and res parameters and is inputted into function to get appointment data.
 *
 * @param req and res The two parameters passed in to get the appropriate appointments,
 * @returns The appropriate data about the appointment
 */
exports.get = function(req,res){

            res.render('business/appointments', {
                title: 'Appointments',
                isOwner: req.user[0].admin,
                businessId: req.user[0].business,
                appointments: "active"
            });
}

/**
 * Takes a req and res parameters and is inputted into function to get appointment data.
 *  Allows the User to input specified data and make changes
 * @param req and res The two parameters passed in to get the apprporiate appointments,
 * @returns The appropriate data about the appointment
 */
exports.post = function(req,res,next){
		res.redirect('/apppointments');
}
