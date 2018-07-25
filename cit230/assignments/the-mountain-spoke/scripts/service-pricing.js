priceData()


function priceData(){
    let priceRequest = new XMLHttpRequest();
    let apiURL = "https://ssturdejunk.github.io/cit230/assignments/the-mountain-spoke/data/service-prices.json";

    priceRequest.open("GET",apiURL,true);
    priceRequest.send();

    priceRequest.onload =  function dataParse() {
        //var priceData = JSON.parse(priceRequest);
        console.log(typeof(priceRequest));
        console.log(priceRequest);

        for (var i = 0; i <= 4; i++){

            var num = i+1;
            var priceID = "price"+num
            console.log(priceID);
            try {
                var price =JSON.parse(priceRequest).prices[i];
            }
            catch (err){console.log(err)};

        document.getElementById(priceID).innerHTML = price;
        }
    }
}
