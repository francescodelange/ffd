const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.PNG';
logo.classList.add('logo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// Create request variable and assign XMLHHttp request
var request = new XMLHttpRequest();

// Begin connection with local .json file
request.open('GET', 'database/movies.json', true);

request.onload = function () {

    // Access .json data
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        data.forEach(movie => {
            // Create div with a class of card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create card front side
            // const figure1 = document.createElement('figure');
            // figure1.setAttribute('class', 'front');

            // Create h1 with movie title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create img with movie cover
            const img = document.createElement('img');
            img.src = movie.cover;
            img.classList.add('cover');

            // Append cards to container
            container.appendChild(card);
            // card.appendChild(figure1);

            // h1 and img for every card
            card.appendChild(h1);
            card.appendChild(img);

            // Create card back side
            // const figure2 = document.createElement('figure');
            // figure2.setAttribute('class', 'back');

            // Create p with movie plot
            const p = document.createElement('p');
            p.textContent = movie.plot;

            var flip = function() {
                card.classList.toggle('flip');

                // remove h1 and img
                card.removeChild(h1);
                card.removeChild(img);

                // p for every card
                card.appendChild(p);

                const cross = document.createElement('div');
                cross.innerHTML = "hello";
                card.appendChild(cross);
                
                var flipback = function() {
                    card.classList.toggle('flip');
                    card.removeChild(p);
                    card.removeChild(div);
                    console.log("hallo");
                    card.appendChild(h1);
                    card.appendChild(img);
                }
                
                cross.addEventListener('click', flipback);

            }

            card.addEventListener('click', flip);
        });
    } else {
        console.log('error')
    }
}

//Send request
request.send();
