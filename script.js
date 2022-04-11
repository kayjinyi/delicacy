// api connection details
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': 'a17c383771mshbf161638102ae4ep17ad69jsn001a69ad58e8'
    }
};

// initialized variables
var recipeButton = document.getElementById("recipe");
var searchedFood = "";



function getRecipe() {
    console.log('tasty recipe function');
    // takes user input value for food search
    searchedFood = document.getElementById("food").value;

    // hits the api for recipe info
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&q=${searchedFood}`, options)
        .then(response => response.json())
        .then(response => {
            // loops through results to show names and url's
            for (let i = 0; i < response.results.length; i++) {
                const element = response.results[i];
                console.log(element.name, element.video_url)

                // TODO: make a placeholder link/image for video_url results that show up null

            }
        })
        .catch(err => console.error(err));
}

recipeButton.addEventListener("click", getRecipe);

