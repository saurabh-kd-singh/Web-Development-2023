const mainContainer = document.querySelector('.start')
const thankContainer = document.querySelector('.c2')
const submitBtn = document.getElementById("submit")

const rating = document.getElementById("rating")
const points = document.querySelectorAll(".point")

submitBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    thankContainer.classList.remove("hidden")
})

points.forEach((point) => {
    point.addEventListener('click', () => {
        rating.innerHTML = point.innerHTML
    })
})
