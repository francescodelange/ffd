// Selecteer li element met document.querySelector
var li = document.querySelector('li');

var dragdrop = function () {
    var ol = document.querySelector('ol');
    // maak een for loop aan met als variabele de lengte van de ol, zet elementen op random volgorde
    for (var i = ol.children.length; i >= 0; i--) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
    }
}

//Voeg een event toe aan li
li.addEventListener('click', dragdrop);
