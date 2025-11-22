let ingredientsArray = [];
let instructionArray = [];

// adds ingredients to list
const addIngred = (event) => {
    const ingredList = document.querySelector("#ingredientList")
    const ingredTextField = document.querySelector("#newIngredient").value

    ingredientsArray.push(ingredTextField);

    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = ingredTextField;
    listItem.appendChild(listText);

    listBtn.textContent = "Delete";
    listBtn.classList.add("deleteIngredientBtn");
    listBtn.addEventListener("click",(event) => {
        ingredList.removeChild(listItem)

        ingredientsArray = ingredientsArray.filter(item => item !== ingredTextField);
        console.log(ingredientsArray)
    });

    listItem.appendChild(listBtn);
    ingredList.appendChild(listItem);

    document.querySelector("#newIngredient").value = "";
    console.log(ingredientsArray)
};

// adds instructions to list
const addInstruct = (event) => {
    const instructList = document.querySelector("#instructionList")
    const instructTextField = document.querySelector("#newInstruction").value

    instructionArray.push(instructTextField);

    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = instructTextField;
    listItem.appendChild(listText);

    listBtn.textContent = "Delete";
    listBtn.classList.add("deleteInstructionBtn");
    listBtn.addEventListener("click",(event) => {
        instructList.removeChild(listItem)

        instructionArray = instructionArray.filter(item => item !== instructTextField);
        console.log(instructionArray)
    });

    listItem.appendChild(listBtn);
    instructList.appendChild(listItem);

    document.querySelector("#newInstruction").value = "";
    console.log(instructionArray)
};

// event listeners for adding ingredients / instructions
document.querySelector("#addIngredient").addEventListener("click", addIngred);
document.querySelector("#addInstruction").addEventListener("click", addInstruct);

// saves to object
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
        ingredients: ingredientsArray,
        instructions: instructionArray
    };

    recipesList.push(newRecipe);
    saveRecipes(recipesList); 
});

// saves to localstorage
function saveRecipes(recipesList) {
    localStorage.setItem("createdRecipes", JSON.stringify(recipesList));
    // reloads page and resets the addRecipe.html page so the user can add another recipe
    alert("Recipe successfully saved!");
    window.location.href = "index.html";
}