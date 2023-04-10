const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


// Init word 
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;


// Set difficulty to value present in local storage or medium
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';


// Set difficulty select value in screen
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

// Focu on input text at start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from API call
async function getRandomWord() {
    const fetchedWord = await fetch('https://random-word-api.herokuapp.com/word');
    const res = await fetchedWord.json();
    return res[0];
}

// Add random word to the dom
async function addWordToDom() {
    randomWord = await getRandomWord();
    word.innerText = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}


// Update time
function updateTime() {
    time--;
    timeEl.innerText = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);

        // End the games as the time has run out
        gameOver();
    }
}

// Game over show End Screen
function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onClick="location.reload()">Reload</button>
    `;

    endgameEl.style.display = 'flex';
}

addWordToDom();


// Function definitions and calls Above
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// EVENT LISTENERS BELOW

text.addEventListener('input', e => {
    const userTypedWord = e.target.value;
    if (userTypedWord === randomWord) {
        addWordToDom();
        updateScore();

        // Clear input
        e.target.value = '';

        // If the userTypedword === random word we add
        // extra time to timer
        if (difficulty === 'hard') {
            time += 2;
        } else if(difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }
    }
})

// Settings button click
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
});

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    
    localStorage.setItem('difficulty', difficulty);
})
