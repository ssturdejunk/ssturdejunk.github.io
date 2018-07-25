priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "https://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/data/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
    var priceData = JSON.parse(priceRequest.prices);
        console.log(priceData);
        console.log(priceData.prices[0])

        for (var i = 0; i <= priceData.prices.length; i++){

            var num = i+1;
            var priceID = "price"+num
            console.log(priceID);
            try {
                var price =priceData.prices[i];
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
        }
    }
}
