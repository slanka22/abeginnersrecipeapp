document.getElementById("saveChangesBtn").addEventListener("click", () => {
    let recipesList = JSON.parse(localStorage.getItem("createdRecipes")) || [];

    const newRecipe = {
        title: document.getElementById("dishTitle").value,
        description: document.getElementById("dishDescr").value,
        prepTime: document.getElementById("prepTime").value,
        cookTime: document.getElementById("cookTime").value,
        servings: document.getElementById("servings").value,
        ingredients: document.getElementById("ingredients").value,
        instructions: document.getElementById("instructions").value
    };

    recipesList.push(newRecipe);
    saveRecipes(recipesList); 
});

function saveRecipes(recipesList) {
    localStorage.setItem("createdRecipes", JSON.stringify(recipesList));
    // reloads page and resets the addRecipe.html page so the user can add another recipe
    location.reload();
    alert("Recipe successfully saved!");
}