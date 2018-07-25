priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "http://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/data/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
        //let priceData = JSON.parse(priceRequest);
        console.log(priceRequest);

        for (var i = 0; i <= priceData.prices.length; i++){

            var num = i+1;
            var count = i;
            var priceID = "price"+num;
            try {
                var price =priceData.prices.count;
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
        }
    }
}
