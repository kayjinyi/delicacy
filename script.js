// Start ======
// Display Modal

$(document).ready(function () {
    $('.modal').modal();
});

// End ======

// Start ======
// Display a random pic from Spoonacular API

const options11 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a17c383771mshbf161638102ae4ep17ad69jsn001a69ad58e8'
    }
};

var randomBtn = document.getElementById("random");
var searchedFood = "";

function getImage() {
    searchedFood = document.getElementById("food").value;

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='+searchedFood+'&number=5', options11)
    .then(response => response.json())
    .then(response => {
        var i = Math.floor(Math.random() * 5);
        var imageUrl = response.baseUri + response.results[i].image;
        document.getElementById("img").src = imageUrl;
        document.getElementById("img").style.height = '40vh';
        document.getElementById("img").style.width = 'auto';
    })
    .catch(err => console.error(err))
}
    
randomBtn.addEventListener("click", getImage);

// End ======

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


// function that gets recipe data from tasty api
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
                // console.log(element.name, element.video_url)
                console.log(element.name, element.instructions)

            }
        })
        .catch(err => console.error(err));
}

recipeButton.addEventListener("click", getRecipe);

// fucntion that displays the recipe info
function displayRecipe() {
    //stuff here
}

var FavoriteBtnEl = document.querySelector('#favoritefood');
var favoriteTerm = document.querySelector('#listGroup');
console.log("linked")
const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Host': 'tasty.p.rapidapi.com', 'X-RapidAPI-Key': 'a17c383771mshbf161638102ae4ep17ad69jsn001a69ad58e8'}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_10_minutes&q=steak', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    var savedFavorites = function(recipe){
        console.log(recipe);
        favorites.push(recipe);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    
        var displayfavorite = function(){
        searchTerm.innerHTML = "";
        for( let i =0; i< favorites.length; i++){
            var list = document.createElement("li");
            list.textContent = favorites[i];

            list.addEventListener("click",function(event){
                var favorites = event.target.textContent
                getRecipte(recipe);   
            })
            searchTerm.append(list);
        }  
        }
    // displayfavorite();