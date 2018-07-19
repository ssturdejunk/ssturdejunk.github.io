function weatherData(id){
    let weatherRequest = new XMLHttpRequest();
    //"4156210";//franklin
    // "4580543";//Greenville
    //"4250542";//Springfield
    let appid = "d46e8cd164513f6a629a3458a7b48428";
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+id+"&APPID="+appid+"&units=imperial";

    weatherRequest.open("GET",apiURL,true);
    weatherRequest.send();

    weatherRequest.onload =  function dataParse() {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        let icon = weatherData.weather[0].icon;
        let imageURL = "http://openweathermap.org/img/w/"+icon+".png";
        let image = new Image();
        image.src = imageURL;
        document.getElementById('currenttemp').innerHTML = weatherData.main.temp.toFixed(0);
        document.getElementById('currentcond').innerHTML = correctCase(weatherData.weather[0].description);
        document.getElementById('currenticon').appendChild(image);
        document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(1);
        document.getElementById('hightemp').innerHTML = weatherData.main.temp_max.toFixed(0);
        document.getElementById('lowtemp').innerHTML = weatherData.main.temp_min.toFixed(0);
    }

function correctCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    forecastData(id)
}



function forecastData(id){
    let weatherRequest = new XMLHttpRequest();
    let appid = "2eb255b139327779760644c5a02b1d06";
    let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id="+id+"&APPID="+appid+"&units=imperial&cnt=5";

    weatherRequest.open("GET",apiURL,true);
    weatherRequest.send();

    weatherRequest.onload =  function dataParse() {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);

        for (var i = 0; i <= weatherData.list.length; i++){

            var num = i+1;
            var highID = "hightemp"+num;
            var lowID = "lowtemp"+num;
            //var dayID = "day"+num;
            try {
            var maxTemp =weatherData.list[i].main.temp_max.toFixed(0);
            var minTemp = weatherData.list[i].main.temp_min.toFixed(0);
            }
            catch (err){console.log(err)};
           // var day = setWeatherDate(weatherData.list[i].dt_txt,i);
           // console.log(day);
          //  document.getElementById(dayID).innerHTML =  day;
        document.getElementById(highID).innerHTML = maxTemp;
            document.getElementById(lowID).innerHTML = minTemp;
        }
    }
}


function setWeatherDate(dt,days){

    var currentdate;
    var today = new Date(dt);
    var today = addDays(today, days)
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var wd = weekday[today.getDay()];
    var dd = today.getDate();
    var mm = month[today.getMonth() + 1]; //January is 0!
    var yyyy = today.getFullYear();


    if (mm < 10) {
        mm = '0' + mm;
    }


    currentdate = wd;
    console.log(currentdate);
    return currentdate;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
