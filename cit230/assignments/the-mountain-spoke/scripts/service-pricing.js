priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "http://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
        let priceData = JSON.parse(priceRequest.responseText);
        console.log(priceData);

        for (var i = 0; i <= priceData.list.length; i++){

            var num = i+1;
            var priceID = "price"+num;
            try {
                var price =priceData.list[i].main.temp_max.toFixed(0);
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
            document.getElementById(lowID).innerHTML = minTemp;
        }
    }
}
