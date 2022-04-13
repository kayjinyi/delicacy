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

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=' + searchedFood + '&number=5', options11)
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
var recipeName = "";
var searchedFood = "";
var element = "";
var recipeContainer = document.getElementById("recipe-container");


// function that gets recipe data from tasty api
function getRecipe() {
    // console.log('tasty recipe function');
    // takes user input value for food search
    searchedFood = document.getElementById("food").value;

    // hits the api for recipe info
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&q=${searchedFood}`, options)
        .then(response => response.json())
        .then(response => {


            // loops through results to show names and url's
            for (let i = 0; i < response.results.length; i++) {
                element = response.results[i];
                // console.log(element.name, element.video_url)
                console.log(element.name, element.instructions)

                // makes the card for the instructions span to be in
                var recipeSpan = [];

                // makes list to click to show cards/modals w recipes
                var content = `<h4 class="recipeName modal-trigger" href="#modal${i}">${element.name}</h4>`;

                // shows the recipe names on the page
                recipeContainer.innerHTML += content;

                recipeName = document.getElementsByClassName("recipeName");

                document.getElementById(`recipe-title${i}`).textContent = element.name;

                // go through instructions and display them on cards/modals
                element.instructions.forEach(element => {

                    // make it an ordered list
                    var listItems = document.createElement("li");
                    listItems.textContent = element.display_text
                    recipeSpan.push(`<li class="white-text">${element.display_text}</li>`)
                    // console.log(listItems, "list items")
                    document.getElementById(`instructions-list${i}`).appendChild(listItems)
                })
            }
        })
        .catch(err => console.error(err));
}

// does the function when recipe button is clicked
recipeButton.addEventListener("click", getRecipe);


// function that displays the recipe info
function displayRecipe() {
    console.log("woohoo")
}

var FavoriteBtnEl = document.querySelector('#favoritefood');
var favoriteTerm = document.querySelector('#listGroup');

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_10_minutes&q=steak', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

var savedFavorites = function (recipe) {
    console.log(recipe);
    favorites.push(recipe);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    var displayfavorite = function () {
        searchTerm.innerHTML = "";
        for (let i = 0; i < favorites.length; i++) {
            var list = document.createElement("li");
            list.textContent = favorites[i];

            list.addEventListener("click", function (event) {
                var favorites = event.target.textContent
                getRecipte(recipe);
            })
            searchTerm.append(list);
        }
    }
}
// Start
// Timer Function

var timerCount = 0;
var minute = 0;
var second = 0;
var minBtn = document.getElementById("min");
var secBtn = document.getElementById("sec");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");

function start() {
    timerCount = (60 * minute) + second;
    var timer = setInterval(function () {
        timerCount--;
        minute = Math.floor(timerCount / 60);
        second = Math.floor(timerCount - minute * 60);
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
        if (timerCount <= 0) {
            clearInterval(timer);
            document.getElementById('minute').innerText = '0';
            document.getElementById('second').innerText = '00';
        }
    }, 1000);
}

function min() {
    minute++;
    document.getElementById('minute').innerText = minute;
}

function sec() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++
    }
    document.getElementById('second').innerText = second;
    document.getElementById('minute').innerText = minute;
}

function reset() {
    clearInterval(timer);
    timerCount = 0;
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '0';
    document.getElementById('second').innerText = '00';
}

minBtn.addEventListener("click", min);
secBtn.addEventListener("click", sec);
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

// End
