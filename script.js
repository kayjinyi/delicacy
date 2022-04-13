
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
                var content = `<h4 class="recipeName">${element.name}</h4>`;
                
                // shows the recipe names on the page
                recipeContainer.innerHTML += content;
                
                recipeName = document.getElementsByClassName("recipeName");
                
                // recipeName[i].addEventListener("click", displayRecipe)

                
                // TODO: go through instructions and display them on cards/modals THIS ONLY HAPPENS ONCE CAUSE IT'S IN THE FOR LOOP DUMMY
                element.instructions.forEach(element => {
                    
                    // make it an ordered list
                    recipeSpan.push(`<li class="white-text">${element.display_text}</li>`)
                    // console.log(element.display_text)
                })

                // adds instructions to instructions list array
                var instructionsList = recipeSpan.join("")
                // makes the card for the recipe to be sidplayed on
                var recipeCard = `<div class="row"><div class="col s12 m5"><div class="card-panel teal"><ol>${instructionsList}</ol></div></div></div>`
                console.log(recipeCard)

                // makes any of the recipe names clickable
                $("h4").click(function(event) {
                    console.log(event.target.innerHTML)

                    // TODO: show the card of the item clicked on
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
