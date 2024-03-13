var el_up = document.getElementById("GFG_UP"); 
var el_down = document.getElementById("GFG_DOWN"); 
  
el_up.innerHTML = "Click on the button to get " 
        + "the day and month of the date."; 

var Days = ['Sunday', 'Monday', 'Tuesday', 
'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

var Months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December']; 

var currentDay = new Date(); 

// Get the current day name 
var day = Days[currentDay.getDay()]; 

// Get the current month name 
var month = Months[currentDay.getMonth()]; 

function GFG_Fun() { 
el_down.innerHTML = "Day - " + day 
    + ",<br> Month - " + month; 