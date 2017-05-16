/**
  This file contains functions that will help the dashboard work.
  @author Original Fubar Team
*/


/**
 * Gets the date of the current day, and turn it into a string that containsText
 * the day and month.
 * @author Original Fubar Team
 * @param {object} date - The current date
 * @return {string} A string that contains the current date.
 */
function dateToString( date ) {
  var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];
    var month = date.getMonth() ;
    var day = date.getDate();
    var dateOfString = (('' + month).length < 2 ? '' : '') +  monthNames[month] + ' ';
    dateOfString += (('' + day).length < 2 ? '0' : '') + day + ' ';
    dateOfString += date.getFullYear();

    return dateOfString;
}
/**
 * Gets the current date and places it in the secondary header
 * @author Original Fubar Team
 */
function getDate(){
  var currentdate = new Date();
  var datetime= '';
  datetime += dateToString(currentdate );

  var header = $('<h5/>');
  header.append(datetime);
  $('#currentDate').replaceWith(header);
}

/**
 * Gets the current time as the page opened, in the form
 * hour:minute:second:am/pm
 * @author Original Fubar Team
 */
function startTime() {
  var today = new Date();
  var h     = today.getHours();
  var m     = today.getMinutes();
  var s     = today.getSeconds();
  var dn    = 'AM';

  if( h > 12 ) {
    dn = 'PM';
    h  = h-12;
  }

  m = checkTime(m);
  s = checkTime(s);
  $('#txt').html(h+':'+m+':'+s+ ' '+ dn);
  setTimeout(function(){startTime();},500);
}

/**
 * Gives correct format of time. All time numbers less than 10
 * have the format 0X, with X being the number.
 * @author Original Fubar Team
 * @param {int} i - time number in a single place (minute/second/hour)
 * @return {string} the time in a single place, with a 0 added if < 10
 */
function checkTime( i ) {
    if( i < 10 ) { i = '0' + i; }  // add zero in front of numbers < 10
    return i;
}

/**
 * Function to get the appointment's time in a formatted string.
 * @author Original Fubar Team
 * @param {object} date - The appointment time
 * @return {string} The appointment time in string format
 */
function getAppDate( date ){
  var appDate = new Date(date);
  //parsing to get time
  var fhours = appDate.getHours();
  var appTime;
  if(fhours/12 < 1){
    var hours = ('0'+appDate.getHours()).slice(-2); //returns 0-
    var minutes = ('0'+appDate.getMinutes()).slice(-2); //returns 0-59
    appTime = hours+':'+minutes + ' AM';
  }
  else{
    var pmHours = appDate.getHours()%12;

    if(pmHours === 0) {
       pmHours = 12;
    }

    var hoursPM = ('0'+pmHours).slice(-2); //returns 0-
    var minutesPM = ('0'+appDate.getMinutes()).slice(-2); //returns 0-59
    appTime = hoursPM+':'+minutesPM + ' PM';
  }

  return appTime;
}

// starting function
$(function() {
  getDate();
  $(startTime);
});
