const searchText = document.getElementById('search-text'),
form = document.getElementById('form'),
randomBtn = document.getElementById('random'),
resultHeadingEl = document.getElementById('result-heading'),
mealsEl = document.getElementById('meals'),
singleMealEl = document.getElementById('single-meal');


// Search meals Function
function searchMeals(e) {
    e.preventDefault();
    
    // clear single meal element
    singleMealEl.innerHTML = '';

    // get the search text 
    const term = searchText.value;

    if (term.trim()) {
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            resultHeadingEl.innerHTML = `<h2>Search results for : '${term}'</h2>`;

            if (data.meals === null) {
                mealsEl.innerHTML ='';
                resultHeadingEl.innerHTML = `<p>There are no results for : '${term}'</p>`
            } else {
                mealsEl.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                    
                `)
                .join('')
            }
        });






        searchText.value  = '';

    } else {
        alert('Please enter a dish name or an ingredient name....')
    }

}



// Event Listeners
form.addEventListener('submit', searchMeals);


mealsEl.addEventListener('click', function(e) {
    const mealInfo = e.path.find( function(item) {
        console.log(item);
    })
})
