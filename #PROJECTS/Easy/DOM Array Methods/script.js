const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');  //Fetching a user data
    const data = await res.json();  //Extract the JSON data from the Response Body by using .json().
    const user = data.results[0];   // the result 

    // user variable has a new user's data, fetched throught fetch API call.
    // we will use that new user data to create a newUser Object.
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser);
}

// Add newUser Object to data Array
function addData(obj) {
    data.push(obj);
    updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
    // console.log(providedData);
    // Clear Main Div
    main.innerHTML = '<h2><strong>Person</strong> Wealth </h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    })
    
}

// Format Number as Money
function formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double all users Money
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money*2}
    });
    updateDOM();
}

// Sort user based on money
function sortByRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

function showMillionairesFn() {
    data = data.filter((user) => user.money > 1000000);
    updateDOM();
}

function calculateWealth() {
    let total = data.reduce((acc, user) => (acc += user.money), 0);
    const element = document.createElement('div');
    element.innerHTML = `<h3>Total Wealth : <strong>${formatMoney(total)}</strong></h3>`;
    main.appendChild(element);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionaires.addEventListener('click', showMillionairesFn);
calculateWealthBtn.addEventListener('click', calculateWealth);