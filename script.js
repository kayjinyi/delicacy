var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=' + APIKey;
console.log(apiUrl);
fetch(apiUrl).then(function(response){
    return response.json()
}).then(function(readableData){
    console.log(readableData.)}
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

    // var savedFavorites = function(recipe){
    //     console.log(recipe);
    //     favorites.push(recipe);
    //     localStorage.setItem("favorites", JSON.stringify(favorites));
    
    //     var displayfavorite = function(){
    //     favoriteTerm.innerHTML = "";
    //     for( let i =0; i< favorites.length; i++){
    //         var list = document.createElement("li");
    //         list.textContent = favorites[i];

    //         list.addEventListener("click",function(event){
    //             var favorites = event.target.textContent
    //             getRecipte(recipe);   
    //         })
    //         favoriteTerm.append(list);
    //     }  
    //     }
    // // displayfavorite();
    var timeLeftEl = $('#timeLeft');
var timeInEl = $('#timerIn')
var startBtn = $('#startBtn')
startBtn.on('click', startBtn, function(e){
    e.preventDefault()
    startTimer()
});
var timerCount = 0;

function startTimer() {
    console.log('started timer')
    timerCount = 60* timeInEl.val();
    var minutes = Math.floor(timerCount/60)
    var seconds = Math.floor(timerCount)
    timeLeftEl.text(minutes + " minutes left " + (seconds - minutes*60) + " seconds ");
    timer = setInterval(function() {
        if (timerCount==0) {
           return
          }
        minutes = Math.floor(timerCount/60)
        seconds = Math.floor(timerCount)
        timerCount--;
        timeLeftEl.text(minutes + " minutes left " + (seconds - minutes*60) + " seconds ");
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        timeLeftEl.text("done");
        clearInterval(timer);
      }
    }, 1000);
   }
   