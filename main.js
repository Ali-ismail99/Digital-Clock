const month = document.querySelector("#month");
const day = document.querySelector("#day");
const year = document.querySelector("#year");

const DayNames = ['Sunday', 'Monday', 'Tuesday', 
'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

const MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 
'May', 'Jun', 'Jul', 'Aug', 'Sep', 
'Oct', 'Nov', 'Dec']; 
function clock(){

    const dateTime = new Date()
month.innerHTML = dateTime.getDate();
day.innerHTML= MonthNames[dateTime.getMonth()];
year.innerHTML= dateTime.getFullYear();

const AmorPm = document.querySelector("#amorpm");
if(dateTime.getHours() > 12)
{
    AmorPm.innerHTML="PM";
}
else{
    AmorPm.innerHTML="AM"
}

//Section Hours

const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");


if(dateTime.getHours() < 10)
{
    Hours.innerHTML= `0 ${dateTime.getHours()}:`
}
else
{
Hours.innerHTML=dateTime.getHours()+ ":"
}
Minutes.innerHTML=dateTime.getMinutes()+":"
Seconds.innerHTML= dateTime.getSeconds()
}
setInterval(clock)