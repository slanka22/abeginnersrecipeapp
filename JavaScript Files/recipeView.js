addEventListener('DOMContentLoaded', () => {
    loadRecipes();
});

function loadRecipes(){
    // Gets the recipeID from the query string
    const urlParams = new URLSearchParams(window.location.search);
    const recipeID = parseInt(urlParams.get('id'));
    
    // Load recipes from localStorage
    const recipes = JSON.parse(localStorage.getItem("createdRecipes")) || [];
    
    // Find recipe by ID
    const recipe = recipes.find(function(currentRecipe) {
        return currentRecipe.recipeID === recipeID;
    });
    
    // Display the recipe details
    document.querySelector("#recipeTitle").textContent = recipe.title;
    document.querySelector("#recipeDescription").textContent = recipe.description;
    document.querySelector("#prepTime").textContent = recipe.prepTime;
    document.querySelector("#cookTime").textContent = recipe.cookTime;
    document.querySelector("#totalTime").textContent = parseInt(recipe.cookTime) + parseInt(recipe.prepTime);
    document.querySelector("#servings").textContent = recipe.servings;
    document.querySelector("#ingredientsText").textContent = recipe.ingredients;
    document.querySelector("#instructionsText").textContent = recipe.instructions;
    
}