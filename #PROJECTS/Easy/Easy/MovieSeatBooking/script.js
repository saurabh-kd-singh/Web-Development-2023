const movieSelect = document.getElementById('movie');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

populateUI();

let ticketPrice = +movieSelect.value;



// save seleceted movie index and price
function setMoviedata(movieIndex, moviePrice) {
    localStorage.setItem('selecetdMovieIndex', movieIndex);
    localStorage.setItem('selecetdMoviePrice', moviePrice);
}

// Update Total and Count
function updateSelctedCount() {
    const selecetedSeats = document.querySelectorAll('.row .seat.selected');

    // copy selecetd seats into an array
    // Map through array
    // return a new array of indexes
    const seatsIndex = [...selecetedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selecetedSeatsCount = selecetedSeats.length;
    count.innerText = selecetedSeatsCount;
    total.innerText = selecetedSeatsCount * ticketPrice;
}


// Get data from local storage and populate UI
function populateUI () {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length>0) {
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//Movie Select Event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    setMoviedata(e.target.selectedIndex, e.target.value);
    updateSelctedCount();
});

// Seat Click event
container.addEventListener('click', (e) => {
    if( (e.target.classList.contains('seat')) 
        && (!e.target.classList.contains('occupied')) )
    {
        e.target.classList.toggle('selected');

        updateSelctedCount();
    }
});

// Initial count and total set
updateSelctedCount();
