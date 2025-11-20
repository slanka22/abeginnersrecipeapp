addEventListener('DOMContentLoaded', () => {
    loadRecipes();
});
// Gets the recipeID from the query string
const urlParams = new URLSearchParams(window.location.search);
const recipeID = parseInt(urlParams.get('id'));
// Load recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("createdRecipes")) || [];
// Find recipe by ID
const recipe = recipes.find(function(currentRecipe) {
    return currentRecipe.recipeID === recipeID;
});

function pushList(array, listElementID){
    const listElement = document.getElementById(listElementID);
    listElement.innerHTML = '';

    // loops through array and creates to 'li' for each item
    array.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}

function loadRecipes(){
    // Display the recipe details
    document.querySelector("#recipeTitle").textContent = recipe.title;
    document.querySelector("#recipeDescription").textContent = recipe.description;
    document.querySelector("#prepTime").textContent = recipe.prepTime;
    document.querySelector("#cookTime").textContent = recipe.cookTime;
    document.querySelector("#totalTime").textContent = parseInt(recipe.cookTime) + parseInt(recipe.prepTime);
    document.querySelector("#servings").textContent = recipe.servings;

    if (recipe.ingredients && Array.isArray(recipe.ingredients)){
        pushList(recipe.ingredients, 'ingredientsList');
    }
    if (recipe.instructions && Array.isArray(recipe.instructions)){
        pushList(recipe.instructions, 'instructionsList');
    }



    /* document.querySelector("#ingredientsText").textContent = recipe.ingredients;
    document.querySelector("#instructionsText").textContent = recipe.instructions; */
}

const deleteRecipeButton = document.querySelector("#deleteButton");

function deleteRecipe() {
    // Finds index
    const index = recipes.findIndex(function(currentRecipe) {
        return currentRecipe.recipeID === recipeID;
    });
    // Deletes
    recipes.splice(index, 1);
    // Sets to localStorage
    localStorage.setItem("createdRecipes", JSON.stringify(recipes));
    // Sends back to home
    window.location.href = "index.html";
}
deleteRecipeButton.addEventListener('click', deleteRecipe);