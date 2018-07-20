let weatherRequest = new XMLHttpRequest();
let id ="4156210";
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
    document.getElementById('currenttemp').innerHTML = weatherData.main.temp;
    document.getElementById('currentcond').innerHTML = correctCase(weatherData.weather[0].description);
    document.getElementById('currenticon').appendChild(image);
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherData.main.temp_min;
}

function correctCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//city id 4156210
//api key d46e8cd164513f6a629a3458a7b48428
/*
function getjson(webAddress){
    var data = new XMLHttpRequest(); // a new request
    data.open("GET",webAddress,false);
    data.send(null);
    return data.responseText;
}

*/


//forecast appid ="2eb255b139327779760644c5a02b1d06"


/*

<span id="currenttemp">
<span id="currentcond">
<span id="precipchance">
<span id="windspeed">
<span id="windchill">
<span id="high">
<span id="low">
<span id="currenticon">
*/
