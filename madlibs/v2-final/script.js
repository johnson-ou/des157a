(function () {
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#madlibs-form');
    const storyOutput = document.querySelector('#story');
    const overlay = document.querySelector('#overlay');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const location = document.querySelector('#location').value;
        const vehicle = document.querySelector('#vehicle').value;
        const verb = document.querySelector('#verb').value;
        const place = document.querySelector('#place').value;
        const animal = document.querySelector('#animal').value;
        const object = document.querySelector('#object').value;
        const adjective = document.querySelector('#adjective').value;
        const tool = document.querySelector('#tool').value;


        // had trouble with this not showing the error message but functionality still works
        if (location === '') {
            storyOutput.innerHTML = 'Please enter a location';
            document.querySelector('#location').focus();
        } else if (vehicle === '') {
            storyOutput.innerHTML = 'Please enter a vehicle';
            document.querySelector('#vehicle').focus();
        } else if (verb === '') {
            storyOutput.innerHTML = 'Please enter a verb';
            document.querySelector('#verb').focus();
        } else if (place === '') {
            storyOutput.innerHTML = 'Please enter a place';
            document.querySelector('#place').focus();
        } else if (animal === '') {
            storyOutput.innerHTML = 'Please enter an animal';
            document.querySelector('#animal').focus();
        } else if (object === '') {
            storyOutput.innerHTML = 'Please enter an object';
            document.querySelector('#object').focus();
        } else if (adjective === '') {
            storyOutput.innerHTML = 'Please enter an adjective';
            document.querySelector('#adjective').focus();
        } else if (tool === '') {
            storyOutput.innerHTML = 'Please enter a tool';
            document.querySelector('#tool').focus();
        } else {
            const story = `For vacation, we decided to go to <span class='highlight'>${location}</span>, but things didn\'t go as planned. First, our <span class='highlight'>${vehicle}</span> broke down and we had to <span class='highlight'>${verb}</span> to the nearest <span class='highlight'>${place}</span>. Then, a wild <span class='highlight'>${animal}</span> stole our <span class='highlight'>${object}</span>. Thankfully, we found a <span class='highlight'>${adjective}</span> guide who helped us find our way back using a <span class='highlight'>${tool}</span>.`;
            storyOutput.innerHTML = story;
            overlay.style.display = 'flex';

            const textFields = document.querySelectorAll('input[type=text]');
            textFields.forEach(input => input.value = '');
        }
    });

    document.querySelector('.close').addEventListener('click', function (e) {
        e.preventDefault();
        overlay.style.display = 'none';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            overlay.style.display = 'none';
        }
    });
})();
