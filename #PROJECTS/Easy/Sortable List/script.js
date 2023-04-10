const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

// Store the list items
const listItems = [];

let dragStartIndex;

createList();

// Insert List items into DOM
function createList() {
    [...richestPeople]
    .map(richPerson => ({value:richPerson, sort:Math.random()}))
    .sort((personOne,personTwo) => personOne.sort - personTwo.sort)
    .map(richPerson => richPerson.value)
    .forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });

    addEventListener();
}

function dragStart() {
    // console.log('dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragOver(e) {
    // console.log('dragOver');
    e.preventDefault();
}

function dragDrop() {
    // console.log('drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function dragEnter() {
    // console.log('enter');
    this.classList.add('over');
}

function dragLeave() {
    // console.log('leave');
    this.classList.remove('over');
}

function swapItems(from, to) {
    const itemOne = listItems[from].querySelector('.draggable');
    const itemTwo = listItems[to].querySelector('.draggable');

    listItems[from].appendChild(itemTwo);
    listItems[to].appendChild(itemOne);
}

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();

        if (personName !== richestPeople[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    });
}

function addEventListener() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })

}


check.addEventListener('click', checkOrder);