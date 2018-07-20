/* JSON data for town info for home page (index.html)*/


townData();

function townData(){
    var header = document.querySelector('div');
    var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open("GET",requestURL,true);
    request.send();
    request.onload = function dataParse() {
    var towns = JSON.parse(request.response).towns;
    showTowns(towns);
    }

    function showTowns(jsonObj) {
        var town = jsonObj;

        for (var i = 0; i < town.length;  i++) {
            if(i!=2){
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = town[i].name;
            myPara1.textContent = 'Motto: ' + town[i].motto;
            myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
                myPara4.textContent = 'Population: ' + town[i].currentPopulation;
                myPara5.textContent = 'Annual Rainfall: ' + town[i].averageRainfall+'"';
            myPara3.textContent = 'Events:';

            var townEvents = town[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }
}
}
