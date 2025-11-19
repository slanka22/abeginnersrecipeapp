document.getElementById("saveChangesBtn").addEventListener("click", () => {
    let recipesList = JSON.parse(localStorage.getItem("createdRecipes")) || [];
    let currentRecipeCount = recipesList.length;

    const newRecipe = {
        recipeID: currentRecipeCount + 1,
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
    alert("Recipe successfully saved!");
    window.location.href = "index.html";
}

const addIngred = (event) => {
    const ingredList = document.querySelector("#ingredientList")
    const ingredTextField = document.querySelector("#newIngredient").value

    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = ingredTextField;
    listItem.appendChild(listText);

    listBtn.textContent = "Delete";
    listBtn.classList.add("deleteIngredientBtn");
    listBtn.addEventListener("click",(event) => {
        ingredList.removeChild(listItem)
    });

    listItem.appendChild(listBtn);
    ingredList.appendChild(listItem);
}

document.querySelector("#addIngredient").addEventListener("click", addIngred);

