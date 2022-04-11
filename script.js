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