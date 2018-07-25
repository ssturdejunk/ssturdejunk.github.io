priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "https://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/data/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
        var priceInfo = JSON.parse(priceRequest.responseText);

        for (var i = 0; i <= 4; i++){

            var num = i+1;
            var priceID = "price"+num
            try {
                var price = priceInfo.prices[i];
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
        }
    }
}
