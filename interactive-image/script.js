// Get the button
var moodButton = document.querySelector('#mood-changer');
var clickCounter = 0;

// Change the mood
function changeMoodText() {
    // Get the element I want to change
    var moodParagraph = document.querySelector('.mood-text');
    // Change the text of the element
    moodParagraph.innerText = 'A sad clown';

    var heroImage = document.querySelector('.hero');
    // Change the src attribute to change the image
    heroImage.src = 'sad-clown.png';
}

// Trigger the event 
moodButton.addEventListener('click', changeMoodText)