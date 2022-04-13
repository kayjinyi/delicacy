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
var recipeName = "";
var searchedFood = "";
var element = "";
var recipeContainer = document.getElementById("recipe-container");


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

                // TODO: go through instructions and display them on cards/modals
                element.instructions.forEach(element => {
                    
                    // make it an ordered list
                    var listItems = document.createElement("li");
                    listItems.textContent = element.display_text
                    recipeSpan.push(`<li class="white-text">${element.display_text}</li>`)
                    console.log(listItems, "list items")
                    document.getElementById(`instructions-list${i}`).appendChild(listItems)
                })

                // adds instructions to instructions list array
                // var instructionsList = recipeSpan.join("")
                // makes the card for the recipe to be sidplayed on
                // var recipeCard = `<div id="modal1" class="modal modal-fixed-footer"><div class="modal-content"><ol>${instructionsList}</ol></div></div>`
                console.log(recipeSpan)

                //sets the name of recipe in modal
                // $("h4").click(function(event) {
                //     document.getElementById(`recipe-title${i}`).textContent = event.target.innerHTML;
                // })

                // set the instructions content in each modal
                // document.getElementById(`instructions-list${i}`).appendChild(recipeSpan)
                //  var stinky = document.getElementById(`instructions-list${i}`)
                //  console.log(stinky, "stinky")

                // makes any of the recipe names clickable
                // $("h4").click(function(event) {
                //     console.log(event.target.innerHTML)

                //     // TODO: only showing the last one again :(
                //     document.getElementById("recipe-title").textContent = event.target.innerHTML;
                //     // document.getElementById("instructions-list").append(recipeSpan)
                //     // recipeSpan.forEach((element, i) => {
                //     //     document.getElementById(`instructions-list${i}`).append(element)
                //     //     console.log("this is i, ", i)
                //     // })
                    
                //     for (let i = 0; i < recipeSpan.length; i++) {
                //         const element = recipeSpan[i];
                        
                //         document.getElementById(`instructions-list${i}`).append(element)
                //     }

                //     // TODO: show the card of the item clicked on
                // })
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
}
