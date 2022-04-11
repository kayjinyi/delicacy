
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
            //add start row
            content += '<div class="row">'
            // loops through results to show names and url's
            for (let i = 0; i < response.results.length; i++) {
                var content = "";
                element = response.results[i];
                // console.log(element.name, element.video_url)
                console.log(element.name, element.instructions)

                // displayRecipe();

            content += '<div class="col s12 m5">'
            content += '<div class="card-panel teal">'
            content += `<span class="white-text">recipe goes here, probably in an ordered list</span>`
            content += '</div>';
            content += '</div>';
            recipeContainer.innerHTML += content;
            }
            content += '</div>';
        })
        .catch(err => console.error(err));
}

recipeButton.addEventListener("click", getRecipe);


// function that displays the recipe info
// function displayRecipe() {
//     element.forEach(function(result, i) {
//         if (i == 0) {
//             //add start row
//             content += '<div class="row">'
//         }
//         content += '<div class="col s12 m5">'
//         content += '<div class="card-panel teal">'
//         content += '<span class="white-text">recipe goes here, probably in an ordered list</span>'  
//     })

//     content += '</div>';
//     content += '</div>';
// }

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