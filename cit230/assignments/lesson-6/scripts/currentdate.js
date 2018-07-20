var currentdate;
var today = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var wd = weekday[today.getDay()];
var dd = today.getDate();
var mm = month[today.getMonth() + 1]; //January is 0!
var yyyy = today.getFullYear();


if (mm < 10) {
    mm = '0' + mm;
}


currentdate = wd + ", " + dd + ' ' + mm + ' ' + yyyy;
//document.write(currentdate);
document.getElementById("currentdate").innerHTML = currentdate;
