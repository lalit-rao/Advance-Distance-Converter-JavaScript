(function () {
    'use strict';

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answer = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event) {
        const key = event.code;
        if (key === 'KeyK') {
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML	= "Type in number of kilometers and click the button to convert the distance to miles";
        }
        else if (key === 'KeyM') {
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML	= "Type in number of miles and click the button to convert the distance to kilometers";
        }
    });

    form.addEventListener('submit', function(event) {
        let conversion;
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            // 	convert miles to kilometers 1.609344
            if (convertType === 'miles') {
                conversion = (distance * 1.609344).toFixed(3);
                // display
                answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`
            }
            // 	convert kilometers to miles 0.621371192
            else {
                conversion = (distance * 0.621371192).toFixed(3);
                answer.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`
            }
        }
        else {
            answer.innerHTML = "<h2>Please provide a number!</h2>";
        }
    });
})()