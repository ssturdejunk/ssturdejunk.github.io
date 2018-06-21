//function doInputOutput() {
    // Get the user input from a text field and convert it to a number
    let high = parseFloat(document.getElementById("high").innerHTML);
    let low = parseFloat(document.getElementById("low").innerHTML);
    let temp = (high+low)/2;
    let wind = parseFloat(document.getElementById("windspeed").innerHTML);
    let finalAnswer = windChill(temp,wind);
    let digits = 0;
    let multiplier = Math.pow(10, digits);
    finalAnswer = Math.round(finalAnswer * multiplier) / multiplier;


    document.getElementById('windchill').innerHTML = finalAnswer;
//}

function windChill(tempF, speed) {
    let windC = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed,0.16))) + (0.4275 * tempF * Math.pow(speed, 0.16));
    return windC;
}


/* Add a windchill.js file to your script folder on the weather site that uses the wind speed and the average temperature between the high and the low predictions to compute and display the wind chill temperature as a new weather data item on to display with the rest of the data.
The formula to calculate the wind chill factor is:
f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.
*/
