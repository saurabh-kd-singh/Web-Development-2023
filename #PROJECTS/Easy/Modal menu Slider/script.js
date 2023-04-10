const toggle = document.getElementById('toggle');
const closee = document.getElementById('close');
const openn = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle navigation
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

// Show Modal
openn.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

// Hide Modal
closee.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// Hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);