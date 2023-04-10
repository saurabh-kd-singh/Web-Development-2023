const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard', 'hangman', 'rainbow'];

let selecetedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show the hidden Word when a person tries to guess words.
function displayWord() {
    wordEl.innerHTML = `
        ${selecetedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `)
            .join('')
        }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selecetedWord) {
        finalMessage.innerText = 'Congratulations! you have Won! 🔥🔥🔥';
        popup.style.display = 'flex';
    }
}

// Display the wrong letters + Display hangman body parts + Check if lost.
function updateWrongLettersEl() {

    // Display Wrong letters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // Display Parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // Check if lost
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost :( ';
        popup.style.display = 'flex';
    }

}

// Show notication from bottom.
function showNotification() {
    notification.classList.add('show');

    setTimeout( () => {
        notification.classList.remove('show');
    }, 2000)
}

// keydown letter press.
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <=90) {
        const letter = e.key;

        if(selecetedWord.includes(letter)){
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

// Restart game and Play again.
playAgainBtn.addEventListener('click', () => {
    // Empty the arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selecetedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
})

displayWord();