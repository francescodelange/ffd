var header = document.querySelector('header');


var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    console.log("Hallo",request.response);
    // var myMovies = request.response;
    populateHeader(request.response);
    // showMovies(myMovies);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    console.log("title; "+jsonObj[0]['title'])
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Simple Plot: ' + jsonObj[0]['simple_plot'];
    header.appendChild(myPara);
}