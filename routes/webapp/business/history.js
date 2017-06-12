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

  var appointmentsList;

  async.parallel({
      appointments: function(cb) {
          req.db.get('appointments').find({
            businessID: req.user[0].business,
            checkin: "yes",
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

      res.render('business/history', {
          title: 'Check-in History',
          isOwner: req.user[0].admin,
          businessId: req.user[0].business,
          appointments: "active",
          appointmentsList: appointmentsList
      });

  });

}
