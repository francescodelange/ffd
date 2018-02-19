/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Onderstaande code van Moodle en Codepen
/* 1. selecteer elementen met document.querySelector */
//var article = document.querySelector('body>section>ol>li'); // first section element
//var h2 = document.querySelector('h2.swipeable');
//var section = document.querySelector('section.replace');

//var swipe = function () {
/* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
//article.classList.toggle('swipe');
//h2.classList.toggle('swipeheader');
//section.classList.toggle('move');
//}

/* 2. voeg een event toe aan een element */
//article.addEventListener('click', swipe);


var source;

function dragStarted(evt) {
    //start drag
    source = evt.target;
    //set data
    evt.dataTransfer.setData("text/plain/image/jpeg", evt.target.innerHTML);
    //specify allowed transfer
    evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
//drag over
evt.preventDefault();
//specify operation
evt.dataTransfer.dropEffect = "move";
}

function dropped(evt){
//drop
evt.preventDefault();
evt.stopPropagation();
//update text in dragged item
source.innerHTML = evt.target.innerHTML;
//update text in drop target
evt.target.innerHTML = evt.dataTransfer.getData("text/plain/image/jpeg");
}