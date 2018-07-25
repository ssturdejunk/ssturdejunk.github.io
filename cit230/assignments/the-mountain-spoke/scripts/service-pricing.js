priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "https://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/data/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
        //let priceData = JSON.parse(priceRequest);
        console.log(priceRequest);

        for (var i = 0; i <= priceRequest.prices.length; i++){

            var num = i+1;
            var priceID = "price"+num
            console.log(priceID);
            try {
                var price =priceRequest.prices[i];
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
        }
    }
}
