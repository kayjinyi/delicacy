// Start ======
// Display Modal

$(document).ready(function () {
    $('.modal').modal();
});

// End ======

// Start ======
// Display a random pic from Spoonacular API

const options = {
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

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='+searchedFood+'&number=5', options)
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