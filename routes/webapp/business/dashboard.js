var auth = require('../../../lib/auth');
var async = require('async');

exports.get = function (req, res) {

	var isPeter = req.user[0].peter;
	var isOwner = req.user[0].admin;
	var employeeId = req.user[0]._id;
	var employeename = req.user[0].fname + ' ' + req.user[0].lname;

	if( isPeter ) {
		res.render('business/dashboard-admin', {
			title: 'Dashboard',
			eid: employeeId,
			employeeName: employeename,
			message: req.flash("permission"),
			layout: 'admin',
			dashboard: "active"
		});
	} else if( isOwner ) {
		var appt = req.db.get('appointments');
		var todayAppointments, todayMissed, todayCheckins, totalCheckins, totalAppointments, totalMissed;

		async.parallel({
	      todayAppointments: function(cb) {
					appt.find({
						businessID: req.user[0].business,
						date: todayDate(),
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						todayAppointments = result.length;
						cb();
					});
	      },
				todayMissed: function(cb) {
					appt.find({
						businessID: req.user[0].business,
						date: todayDate(),
						time: {$lt: getTime()},
						checkin: "no",
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						todayMissed = result.length;
						cb();
					});
	      },
				todayCheckins: function(cb) {
					appt.find({
						businessID: req.user[0].business,
						date: todayDate(),
						checkin: "yes",
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						todayCheckins = result.length;
						cb();
					});
				},
				totalCheckins: function(cb) {
					appt.find({
						businessID: req.user[0].business,
						checkin: "yes",
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						totalCheckins = result.length;
						cb();
					});
				},
				totalMissed: function(cb) {
					appt.find({
						businessID: req.user[0].business,
						date: {$lt, todayDate()},
						time: {$lt: getTime()},
						checkin: "no",
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						totalMissed = result.length;
						cb();
					});
				},
				totalAppointments: function(cb) {
					appt.find({
						businessID: req.user[0].business,
					}, function (err, result) {
						if (err) {
							console.log(err);
						}
						totalAppointments = result.length;
						cb();
					});
				}
	  },

	  function(err,results){

	      if(err){
	          throw err;
	      }

				res.render('business/dashboard-business', {
					totalAppointments: totalAppointments,
					totalMissed: totalMissed,
					totalCheckins, totalCheckins,
					todayAppointments: todayAppointments,
					todayCheckins: todayCheckins,
					todayMissed: todayMissed,
					title: 'Dashboard',
					eid: employeeId,
					employeeName: employeename,
					message: req.flash("permission"),
					isOwner: isOwner,
					businessId: req.user[0].business,
					dashboard: "active"
				});

	  });

		function getTime () {
				var unformattedApptTime = new Date();
				var formattedHour = unformattedApptTime.getUTCHours() - 7;
				var formattedMinutes = unformattedApptTime.getUTCMinutes();
				var formattedSecond = unformattedApptTime.getUTCSeconds();
				var formattedApptTime = formattedHour + ":" + formattedMinutes;

				return formattedApptTime;
		}

		function todayDate() {
			var unformattedApptTime = new Date();
			var formattedDay = unformattedApptTime.getUTCDate();
			formattedDay = (unformattedApptTime.getUTCHours() < 7) ? formattedDay - 1 : formattedDay;
			formattedDay = (formattedDay < 10) ? "0" + formattedDay : formattedDay;
			var formattedMonth = unformattedApptTime.getUTCMonth() + 1;
			formattedMonth = (formattedMonth < 10) ? "0" + formattedMonth : formattedMonth;
			var formattedYear = unformattedApptTime.getUTCFullYear();
			var formattedDate = formattedMonth + "/" + formattedDay + "/" + formattedYear;
			return formattedDate;
		}

	} else {

		var db = req.db;
		var appointments = db.get('appointments');
		var employees = db.get('employees');

		var patientList = [];

		appointments.find({
			business: req.user[0].business
		}, function (errAppt, resultAppts) {
			var filteredAppts = resultAppts.filter( function (elem, i, arr) {
				return elem.state !== "scheduled";
			});

			var itemsProcessed = 0;
			console.log(filteredAppts);

			if( filteredAppts.length ) {
				filteredAppts.forEach( function (elem, i, arr) {
					var apptInfo = {};


					apptInfo.visitor = elem.fname + ' ' + elem.lname;
					apptInfo.apptTime = formatDate(elem.date);
					apptInfo.state = elem.state[0].toUpperCase() + elem.state.substr(1);
					apptInfo.currentTime = formatDate(elem.checkin);

					employees.find({
						business: req.user[0].business,
						_id: elem.employee
					}, function (errEmployee, employee) {
						apptInfo.doctor = employee[0].fname;
						patientList.push(apptInfo);
						itemsProcessed++;
						if( itemsProcessed == arr.length ) {
							renderDashboard();
						}
					});
				});
			} else {
				renderDashboard();
			}
		});

		function renderDashboard () {
			res.render('business/visitor-list', {
				title: "Visitor List",
				isAdmin: req.user[0].admin,
				patients: patientList
			});
		}

		function formatDate (date) {
            var unformattedApptTime = new Date(date);
            var formattedHour = unformattedApptTime.getHours() > 12 ? unformattedApptTime.getHours() % 12 : unformattedApptTime.getHours();
            var formattedMinutes = unformattedApptTime.getMinutes();
            var ampm = unformattedApptTime.getHours() > 12 ? " PM" : " AM";
            var formattedApptTime = formattedHour + ":" + formattedMinutes + ampm;

            return formattedApptTime;
        }
	}

};
