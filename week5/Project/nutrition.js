apiKey = "8ec46005989845ceb695c7c50a91b64c"
spoonApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=1&sort=random&maxCalories=750&addRecipeInformation=true`

async function pullRecipe() {
    const foodContainer = document.querySelector(".foodContainer")
    const fetchrecipe = await fetch(spoonApi);
    const jsonRecipe = await fetchrecipe.json();
    
    for (let recipe of jsonRecipe.results) {

        const recipeName = document.createElement("h3");
        const recipePic = document.createElement("img");
        const recipeSummary = document.createElement("p");
        const recipeUrl = document.createElement("a");
        console.log(recipe)
        recipeName.innerHTML = recipe.title;
        recipePic.src = recipe.image;
        recipeSummary.innerHTML = recipe.summary;
        recipeUrl.href = recipe.spoonacularSourceUrl;
        recipeUrl.innerText = "Recipe Link"
        console.log(recipe.spoonacularSourceUrl)
        foodContainer.append(recipeName, recipePic, recipeSummary, recipeUrl)
        

    }
}
pullRecipe()

const toggleMen = document.querySelector(".toggleMenu")
const navLinks = document.querySelector(".navLinks")

toggleMen.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})


