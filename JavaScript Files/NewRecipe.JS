document.addEventListener("DOMContentLoaded", () => {
    const ingredientsArray = [];

    const ingredList = document.querySelector("#ingredientList");
    const ingredInput = document.querySelector("#newIngredient");
    const addIngredBtn = document.querySelector("#addIngedient");
    const saveBtn = document.getElementById("saveChangesBtn");

    // appends new ingredient to ingredient list
    function appendIngredient(text){
        const listItem = document.createElement("li");

        const listText = document.createElement("span");
        listText.textContent = text;
        listItem.appendChild(listText);

        const listBtn = document.createElement("button");
        listBtn.textContent = "Delete";
        listBbtn.classList.add("deleteIngredientBtn");

        listBtn.addEventListener("click", () => {
            const idx = ingredientsArray.indexOf(text);
            if (idx > -1) ingredientsArray.splice(idx,1);
            ingredList.removeChild(listItem);
        });
        listItem.appendChild(listBtn);
        ingredList.appendChild(listItem);
    }

    function addIngrid(event) {
    // if button is inside a form, we don't want a submit; but it's not in a form, still safe:
    if (event) event.preventDefault();

    const value = ingridInputEl.value.trim();
    if (!value) return; // don't add empty items

    // add to data model
    ingredients.push(value);

    // render to list
    renderIngredient(value);

    // clear input and focus for next entry
    ingridInputEl.value = "";
    ingridInputEl.focus();
  }

  addIngridBtn.addEventListener("click", addIngrid);

  saveBtn.addEventListener("click", () => {
    let recipesList = JSON.parse(localStorage.getItem("createdRecipes")) || [];
    let currentRecipeCount = recipesList.length;

    const newRecipe = {
      recipeID: currentRecipeCount + 1,
      title: document.getElementById("dishTitle").value,
      description: document.getElementById("dishDescr").value,
      prepTime: document.getElementById("prepTime").value,
      cookTime: document.getElementById("cookTime").value,
      servings: document.getElementById("servings").value,
      // uses the array
      ingredients: ingredients,
      instructions: document.getElementById("instructions").value
    };

    recipesList.push(newRecipe);
    localStorage.setItem("createdRecipes", JSON.stringify(recipesList));
    alert("Recipe successfully saved!");
    window.location.href = "index.html";
  });
});

