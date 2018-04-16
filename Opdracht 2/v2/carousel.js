var carouselImages = document.querySelectorAll('body>div:first-of-type>div:first-child>div'),
    arrowLeft = document.querySelector('body>div:nth-of-type(2)'),
    arrowRight = document.querySelector('body>div:nth-of-type(3)'),
    current = 0;

// Clear images
function reset() {
    for (var i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = 'none';
    }
}

// Initialize carousel
function startCarousel() {
    reset();
    carouselImages[0].style.display = 'block';
}

// Show previous
function previous() {
    reset();
    carouselImages[current - 1].style.display = 'block';
    carouselImages[current - 1].classList.add = 'fade';
    current--;
}

// Show next
function next() {
    reset();
    carouselImages[current + 1].style.display = 'block';
    carouselImages[current].classList.add = 'slide';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
    console.log("Hallo");
    if (current == 0) {
        current = carouselImages.length;
    }
    previous();
});

/*document.addEventListener('keydown', checkKeyPressed, false);

function checkKeyPressed() {
    console.log("Hallo");
    if (evt.keyCode == "27") {
        if (current == 0) {
            current = carouselImages.length;
        }
        previous();
    }
}*/

// Right arrow click
arrowRight.addEventListener('click', function () {
    if (current == carouselImages.length - 1) {
        current = -1;
    }
    next();
});

startCarousel();
