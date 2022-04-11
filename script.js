console.log("linked")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': 'a17c383771mshbf161638102ae4ep17ad69jsn001a69ad58e8'
    }
};

function getRecipe() {
    console.log('tasty recipe function');

    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => {
            // console.log(response.results)
            for (let i = 0; i < response.results.length; i++) {
                const element = response.results[i];
                console.log(element, element.video_url)

            }
        })
        .catch(err => console.error(err));
}

getRecipe();

