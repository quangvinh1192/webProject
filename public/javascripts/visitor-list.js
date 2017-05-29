/**
  * @file This file contains functions that deals with user interactions
  * in creating an appointment. This includes different things a
  * receptionist would take care of with a new visitor.
  @author Original Fubar Team
*/

// Returns protocol, hostname and portnumber of URL
var socket = io(window.location.origin);

=======
/**
 * When user wants to check in, function gathers data from form
 * @author Original Fubar Team
 * @param {object} data - resulting data from request
 */
socket.on('checkin', function (data) {
    console.log(data);

    var apptList = document.getElementById('appointment-list');
    var appointment = document.createElement("tr");

    var visitorField = document.createElement("td");
    visitorField.appendChild( document.createTextNode(data.visitor) );
    appointment.appendChild(visitorField);

    var doctorField = document.createElement("td");
    doctorField.appendChild( document.createTextNode(data.doctor) );
    appointment.appendChild(doctorField);

    var apptTime = document.createElement("td");
    apptTime.appendChild( document.createTextNode(data.apptTime) );
    appointment.appendChild(apptTime);

    var currTime = document.createElement("td");
    currTime.appendChild( document.createTextNode(data.currentTime) );
    appointment.appendChild(currTime);

    var status = document.createElement("td");
    status.appendChild( document.createTextNode(data.status) );
    appointment.appendChild(status);

    apptList.appendChild(appointment);

});

<<<<<<< HEAD
var toggleHighlight = function () {
    if(!this.hilite){
        unhighlight();
        this.style.backgroundColor='#f5f5f5';
        this.hilite = true;
    }
    else{
        this.style.backgroundColor="white";
        this.hilite = false;
    }
};
=======
/**
 * Goes through appointment table, and highlights/unhighlights
 * according to user clicks
 * @author Original Fubar Team
 */
function highlight() {
    var table = document.getElementById('appointment-list');
    // go through all appointments
    for (var i=0;i < table.rows.length;i++){
        table.rows[i].onclick = toggleHighlight;
    }
}

/**
 * Goes through and sets all of appointment list to white (unhighlighted)
 * @author Original Fubar Team
 */
function unhighlight(){
 var table = document.getElementById('appointment-list');
 for (var i=0;i < table.rows.length;i++) {
   var row = table.rows[i];
   row.style.backgroundColor="white";
   row.hilite = false;
 }
}

/**
 * When user wants to checkout, take all highlighted rows and turn them red
 * @author Original Fubar Team
 */
function checkOut(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="red";
        }
    }
}

/**
 * When user wants to checkin, take all highlighted rows and turn them green
 * @author Original Fubar Team
 */
function checkIn(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="green";
        }
    }
}
/**
 * When user wants to reschedule, take all highlighted rows and turn them yellow
 * @author Original Fubar Team
 */
function reschedule(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="yellow";
        }
    }
}
