// var style = require('./../../../lib/style.js');
//
// exports.get = function (req, res, next) {
//     var business = req.session.business;
//     res.render('checkin/checkin', {
//         companyName: business.companyName,
//         bg: business.style.bg,
//         logo: business.logo,
//         buttonBg: style.rgbObjectToCSS(business.style.buttonBg),
//         buttonText: style.rgbObjectToCSS(business.style.buttonText),
//         containerText: style.rgbObjectToCSS(business.style.containerText),
//         containerBg: style.rgbObjectToCSS(business.style.containerBg),
//         layout: false
//     });
// };
var ObjectID = require('mongodb').ObjectID;
var style = require('./../../../lib/style.js');

var request = require('request');

exports.get = function (req, res, next) {

    var business = req.session.business;
    //
    //var slackOptions = {
    //    uri: 'https://hooks.slack.com/services/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',
    //    method: 'POST',
    //    json: {
    //        "channel": "#bobsburgers",
    //        "text": "A new client just checked in!"
    //    }
    //};
    //
    //request(slackOptions, function (error, response, body) {
    //    if(!error && response.statusCode == 200) {
    //        console.log(body.id);
    //    }
    //});

    res.render('checkin/checkin', {
        companyName: business.companyName,
        bg: business.style.bg,
        logo: business.logo,
        buttonBg: style.rgbObjectToCSS(business.style.buttonBg),
        buttonText: style.rgbObjectToCSS(business.style.buttonText),
        containerText: style.rgbObjectToCSS(business.style.containerText),
        containerBg: style.rgbObjectToCSS(business.style.containerBg),
        layout: false
    });
};

exports.post = function (req, res, next) {
    var db = req.db;
    var io = req.app.io;

    console.log("");



    var appointments = db.get('appointments');
    var businesses = db.get('businesses');
    var employees = db.get('employees');

    var business = req.session.business;

    var inputName = req.body.inputName;
    var inputPhone = req.body.inputPhone.replace(/[\(\)-\s]/g, '');

    appointments.find({
        businessID: ObjectID(req.params.id),
        name: inputName,
        phone: inputPhone
    }, function(err, result) {
      if (err) {
        throw err;
      }

        // slack integration
        // //TODO: Uncomment this when front end is actually tied to the DB and checking if the appointment is valid
        // //TODO: Also need to take out the slack request from the done.js file in the same directory as checkin
        // var slackOptions = {
        //    uri: 'https://hooks.slack.com/services/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',
        //    method: 'POST',
        //    json: {
        //        "channel": "#bobsburgers",
        //        "text": inputFirst + " " + inputLast + " just checked in."
        //    }
        // };
        //
        // request(slackOptions, function (error, response, body) {
        //    if(!error && response.statusCode == 200) {
        //        console.log(body.id);
        //    }
        // });

        var returnMessage;
        var currDate = todayDate();

        if (result.length == 0) {
          returnMessage = 'No appointment found';
        }
        else if (result[0].checkin == "yes") {
          returnMessage = 'You already checked in at ' + result[0].checkinTime + '.';
        }
        else if (result[0].date != currDate) {
          returnMessage = 'Your appointment is on ' + result[0].date + '.\nPlease check in on this date.';
        }
        else {
          appointments.update({
            businessID: ObjectID(req.params.id),
            name: inputName,
            phone: inputPhone
          },
          {
            name: result[0].name,
            time: result[0].time,
            date: result[0].date,
            email: result[0].email,
            phone: result[0].phone,
            checkin: "yes",
            checkinTime: getTime(),
            businessID: req.user[0].business,
          },
          function(err2, result) {
            if (err2) {
              throw err2;
            }
          });
          returnMessage = 'Welcome to ' + business.companyName + '.\nYou have checked in!'
        }

        res.render('checkin/checkin', {
            error: returnMessage,
            layout: false,
            companyName: business.companyName,
            bg: business.style.bg,
            logo: business.logo,
            buttonBg: style.rgbObjectToCSS(business.style.buttonBg),
            buttonText: style.rgbObjectToCSS(business.style.buttonText),
            containerText: style.rgbObjectToCSS(business.style.containerText),
            containerBg: style.rgbObjectToCSS(business.style.containerBg)
        });
        return;

        // var appt = result[0];
        // var apptID = appt._id;
        //
        // req.session.appointmentId = apptID;
        // var currentTime = new Date();
        // req.session.save(function (err) {
        //     if (err) {
        //         console.error('Session save error:', err);
        //     }
        //
        //     var newAppointment = {
        //         visitor: inputFirst + " " + inputLast,
        //         apptTime: formatDate(appt.date),
        //         currentTime: formatDate(currentTime),
        //         status: 'Lobby'
        //     }
        //
        //     employees.find({
        //         business: appt.business,
        //         _id: appt.employee
        //     }, function (err, results) {
        //         newAppointment.doctor = results[0].fname;
        //         io.emit('checkin', newAppointment);
        //     });
        //
        //     res.redirect('done');
        // });
        //         //Update the state of the appointment
        // req.db.get('appointments').updateById(req.session.appointmentId, {
        //     $set: {
        //         state: 'lobby',
        //         checkin: currentTime
        //     }
        // }, function (err) {
        //     if (err) {
        //         return next(err);
        //     }
        // });

        // function formatDate (date) {
        //     var unformattedApptTime = new Date(date);
        //     var formattedHour = unformattedApptTime.getHours() > 12 ? unformattedApptTime.getHours() % 12 : unformattedApptTime.getHours();
        //     var formattedMinutes = unformattedApptTime.getMinutes();
        //     var ampm = unformattedApptTime.getHours() > 12 ? "pm" : "am";
        //     var formattedApptTime = formattedHour + ":" + formattedMinutes + ampm;
        //
        //     return formattedApptTime;
        // }

        function getTime () {
            var unformattedApptTime = new Date();
            var formattedHour = unformattedApptTime.getHours() > 12 ? unformattedApptTime.getHours() % 12 : unformattedApptTime.getHours();
            var formattedMinutes = unformattedApptTime.getMinutes();
            var ampm = unformattedApptTime.getHours() > 12 ? "pm" : "am";
            var formattedApptTime = formattedHour + ":" + formattedMinutes + ampm;

            return formattedApptTime;
        }

        function todayDate() {
          var unformattedApptTime = new Date();
          var formattedDay = unformattedApptTime.getDate();
          formattedDay = (formattedDay < 10) ? "0" + formattedDay : formattedDay;
          var formattedMonth = unformattedApptTime.getMonth() + 1;
          formattedMonth = (formattedMonth < 10) ? "0" + formattedMonth : formattedMonth;
          var formattedYear = unformattedApptTime.getFullYear();
          var formattedDate = formattedMonth + "/" + formattedDay + "/" + formattedYear;
          return formattedDate;
        }
    });
};
