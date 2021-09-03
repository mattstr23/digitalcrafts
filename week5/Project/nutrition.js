apiKey = "8ec46005989845ceb695c7c50a91b64c"
spoonApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&sort=random&maxCalories=750&addRecipeInformation=true`

const activate = document.querySelector(".brocoli");
const foodContainer = document.querySelector(".foodContainer");

async function pullRecipe() {
    foodContainer.innerHTML = "";
    const activate = document.querySelector(".brocoli")
    const fetchrecipe = await fetch(spoonApi);
    const jsonRecipe = await fetchrecipe.json();
    
    for (let recipe of jsonRecipe.results) {
        const foodCard = document.createElement("div");
        foodCard.className = "foodCard";
        const recipeName = document.createElement("h3");
        recipeName.className = "recipeName";
        const recipePic = document.createElement("img");
        recipePic.className = "recipePic";
        const recipeSummary = document.createElement("p");
        recipeSummary.className = "recipeSummary";
        const recipeUrl = document.createElement("a");
        recipeUrl.className = "recipeUrl";
        recipeName.innerHTML = recipe.title;
        recipePic.src = recipe.image;
        recipeSummary.innerHTML = recipe.summary;
        recipeUrl.href = recipe.spoonacularSourceUrl;
        recipeUrl.innerText = "Recipe Link";
        console.log(recipe.spoonacularSourceUrl)
        foodCard.append(recipeName, recipePic, recipeSummary, recipeUrl)
        foodContainer.append(foodCard);
    }
}

activate.addEventListener("click", () => pullRecipe())

const toggleMen = document.querySelector(".toggleMenu")
const navLinks = document.querySelector(".navLinks")

toggleMen.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})


