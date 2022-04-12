
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

            // makes the card for the instructions span to be in
            var recipeSpan = [];
            
            // loops through results to show names and url's
            for (let i = 0; i < response.results.length; i++) {
                element = response.results[i];
                // console.log(element.name, element.video_url)
                console.log(element.name, element.instructions)
                
                
                // makes list to click to show cards/modals w recipes TODO: make them clickable
                var content = `<h4 class="recipeName">${element.name}</h4>`;
                
                recipeContainer.innerHTML += content;
                
                recipeName = document.getElementsByClassName("recipeName");
                
                recipeName[i].addEventListener("click", displayRecipe)
                // TODO: go through instructions and display them on cards/modals
                element.instructions.forEach(element => {
                    //create card to append on click of food name
                    // console.log(element.display_text)
                    
                    // TODO: make it an ordered list instead of a span
                    
                    recipeSpan.push(`<li class="white-text">${element.display_text}</li>`)
                    console.log(element.display_text)
                })
            }
            var instructionsList = recipeSpan.join("====")
            // makes the card for the recipe to be sidplayed on
            var recipeCard = `<div class="row"><div class="col s12 m5"><div class="card-panel teal"><ol>${instructionsList}</ol></div></div></div>`
            // console.log(recipeSpan)
        })
        .catch(err => console.error(err));
}

recipeButton.addEventListener("click", getRecipe);


// function that displays the recipe info
function displayRecipe() {
    console.log("woohoo")
}

// var FavoriteBtnEl = document.querySelector('#favoritefood');
// var favoriteTerm = document.querySelector('#listGroup');
// console.log("linked")
// const options2 = {
// 	method: 'GET',
// 	headers: {'X-RapidAPI-Host': 'tasty.p.rapidapi.com', 'X-RapidAPI-Key': 'a17c383771mshbf161638102ae4ep17ad69jsn001a69ad58e8'}
// };

// fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_10_minutes&q=steak', options2)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     var savedFavorites = function(recipe){
//         console.log(recipe);
//         favorites.push(recipe);
//         localStorage.setItem("favorites", JSON.stringify(favorites));
    
//         var displayfavorite = function(){
//         searchTerm.innerHTML = "";
//         for( let i =0; i< favorites.length; i++){
//             var list = document.createElement("li");
//             list.textContent = favorites[i];

//             list.addEventListener("click",function(event){
//                 var favorites = event.target.textContent
//                 getRecipte(recipe);   
//             })
//             searchTerm.append(list);
//         }  
//         }
//     }
    
    // displayfavorite();