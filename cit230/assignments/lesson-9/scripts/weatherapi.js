let weatherRequest = new XMLHttpRequest();
let id ="4156210";
let appid = "d46e8cd164513f6a629a3458a7b48428";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+id+"&APPID="+appid+"&units=imperial";

weatherRequest.open("GET",apiURL,true);
weatherRequest.send();

weatherRequest.onload =  function dataParse() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
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
