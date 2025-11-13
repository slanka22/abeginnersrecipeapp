document.getElementById("saveChangesBtnUpdate").addEventListener("click") {
    editRecipe();
}

function editRecipe() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeID = parseInt(urlParams.get('id'));

    let recipesList = JSON.parse(localStorage.getItem("createdRecipes")) || [];

    const chosenIndex = recipesList.findIndex(r => r.recipeID === recipeID);

    const recipeTemplate = {
        recipeID: recipeID, 
        title: document.getElementById("dishTitleUpdate").value,
        description: document.getElementById("dishDescrUpdate").value,
        prepTime: document.getElementById("prepTimeUpdate").value,
        cookTime: document.getElementById("cookTimeUpdate").value,
        servings: document.getElementById("servingsUpdate").value,
        ingredients: document.getElementById("ingredientsUpdate").value,
        instructions: document.getElementById("instructionsUpdate").value
    };

    recipesList[chosenIndex] = recipeTemplate;

    saveRecipes(recipesList);
}

function saveRecipes(recipesList) {
    localStorage.setItem("createdRecipes", JSON.stringify(recipesList));
    alert("Recipe successfully saved!");
    window.location.href = "index.html"; // redirect back to home
}