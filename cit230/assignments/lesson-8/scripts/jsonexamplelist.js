function getListEntry(){

    var listItem = document.getElementById('titleList').value;
    var url ='http://www.omdbapi.com/?t='+listItem+'&apikey=eeaf028c';
    var movie = JSON.parse(getjson(url));

    document.getElementById('year').innerHTML = movie.Year;
    document.getElementById('genre').innerHTML = movie.Genre;
    document.getElementById('actors').innerHTML = movie.Actors;
    document.getElementById('plot').innerHTML = movie.Plot;
    document.getElementById('awards').innerHTML = movie.Awards;
}

function getSearchString(){

    var searchStr = document.getElementById('searchString').value;

    searchStr = searchStr.split(' ').join('+');

    var url ='http://www.omdbapi.com/?t='+searchStr+'&apikey=eeaf028c';
    var movie = JSON.parse(getjson(url));

    document.getElementById('title').innerHTML = movie.Title;
    document.getElementById('year').innerHTML = movie.Year;
    document.getElementById('genre').innerHTML = movie.Genre;
    document.getElementById('actors').innerHTML = movie.Actors;
    document.getElementById('plot').innerHTML = movie.Plot;
    document.getElementById('awards').innerHTML = movie.Awards;
}

function getjson(webAddress){
    var data = new XMLHttpRequest(); // a new request
    data.open("GET",webAddress,false);
    data.send(null);
    return data.responseText;
}


function buildElements(){

    var url ='http://ssturdejunk.github.io/cit230/assignments/lesson-8/scripts/elements.json';
    var data = JSON.parse(getjson(url));
    var elements = data.elements;
    var

   for (var i = 0; i< elements.length; i++){
       createElement('h1', elements[i].name);
       for (var j = 0; j < elements[j].length; j++){
           createDiv(elements[j].symbol);
       }
   }
}
