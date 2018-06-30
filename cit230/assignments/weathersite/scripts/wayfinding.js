var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !=="") {
    var menu = document.querySelectorAll('nav ul li a');
    var i;
    for (i = 0; i < menu.length; i++) {
        var currentURL = (menu[i].getAttribute("href"));
        menu[i].parentNode.className="";
        if (currentURL === pageHREF) {
            menu[i].parentNode.className = "active";
        }
    }
}

/*
window.onload = function wayfinding() {
    let urlString, urlArray, pageHREF, menu, i, currentURL;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    pageHREF = urlArray[urlArray.length - 1];


    if (pageHREF !== "") {
        menu = document.querySelectorAll('ul#mainmenu li a');

        for (i = 0; i < menu.length; i++) {
            currentURL = (menu[i].getAttribute('href'));
            menu[i].parentNode.className = '';
            console.log(pageHREF + " " + currentURL);

            if (currentURL === pageHREF) {
                menu[i].parentNode.className = 'active';
            }
        }
    };
}
*/
