var movie = JSON.parse(getjson('https://ssturdejunk.github.io/cit230/assignments/lesson-8/scripts/movie.json'));

document.getElementById('title').innerHTML = movie.Title;
document.getElementById('year').innerHTML = movie.Year;
document.getElementById('genre').innerHTML = movie.Genre;
document.getElementById('actors').innerHTML = movie.Actors;
document.getElementById('plot').innerHTML = movie.Plot;
document.getElementById('awards').innerHTML = movie.Awards;


function getjson(webAddress){
    var data = new XMLHttpRequest(); // a new request
    data.open("GET",webAddress,false);
    data.send(null);
    return data.responseText;          
}