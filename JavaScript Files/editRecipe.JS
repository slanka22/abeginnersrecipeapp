let ingredientsArray = [];
let instructionArray = [];

window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeID = urlParams.get('id');
    
    if (recipeID) {
        loadRecipeData(parseInt(recipeID));
    }
});

// Load existing recipe data for editing
function loadRecipeData(recipeID) {
    let recipesList = JSON.parse(localStorage.getItem("createdRecipes"));
    
    if (recipesList === null) {
        recipesList = [];
    }
    
    const recipe = recipesList.find(function(r) {
        return r.recipeID === recipeID;
    });

    if (recipe.recipeImage) {
    uploadedImageData = recipe.recipeImage; // PRELOAD EXISTING IMAGE
    const img = document.getElementById("capturedImage");
    if (img) {
        img.src = uploadedImageData;
        img.style.display = "block";
    }
}

    if (recipe) {
        // Populate input fields and checks if fields exist
        if (recipe.title) {
            document.getElementById("dishTitleUpdate").value = recipe.title;
        } else {
            document.getElementById("dishTitleUpdate").value = '';
        }
        
        if (recipe.description) {
            document.getElementById("dishDescrUpdate").value = recipe.description;
        } else {
            document.getElementById("dishDescrUpdate").value = '';
        }
        
        if (recipe.prepTime) {
            document.getElementById("prepTimeUpdate").value = recipe.prepTime;
        } else {
            document.getElementById("prepTimeUpdate").value = '';
        }
        
        if (recipe.cookTime) {
            document.getElementById("cookTimeUpdate").value = recipe.cookTime;
        } else {
            document.getElementById("cookTimeUpdate").value = '';
        }
        
        if (recipe.servings) {
            document.getElementById("servingsUpdate").value = recipe.servings;
        } else {
            document.getElementById("servingsUpdate").value = '';
        }

        // Populate ingredients list using helper function
            // checks if recipe.ingredients exists and that it is an array
        if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
            // creates copy of the array
            ingredientsArray = recipe.ingredients.slice();
            /// selects ingredientsList <ul>
            const ingredList = document.querySelector("#ingredientList");
            
            // for each loop using helper function
            recipe.ingredients.forEach(function(ingredient) {
                addIngredientToList(ingredient, ingredList);
            });
        }

        // Populate instructions list using helper function
        if (recipe.instructions && Array.isArray(recipe.instructions)) {
            instructionArray = recipe.instructions.slice();
            const instructList = document.querySelector("#instructionList");
            
            recipe.instructions.forEach(function(instruction) {
                addInstructionToList(instruction, instructList);
            });
        }
    } else {
        alert("Recipe not found!");
        window.location.href = "index.html";
    }
}

// Helper function to add ingredient to list (extracted for reuse)
function addIngredientToList(ingredTextField, ingredList) {
    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = ingredTextField;
    listItem.appendChild(listText);

    listBtn.textContent = "Delete";
    listBtn.classList.add("deleteIngredientBtn");
    listBtn.addEventListener("click", function(event) {
        ingredList.removeChild(listItem);
        ingredientsArray = ingredientsArray.filter(function(item) {
            return item !== ingredTextField;
        });
        console.log(ingredientsArray);
    });

    listItem.appendChild(listBtn);
    ingredList.appendChild(listItem);
}

// Helper function to add instruction to list (extracted for reuse)
function addInstructionToList(instructTextField, instructList) {
    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    // creating li
    listText.textContent = instructTextField;
    listItem.appendChild(listText);

    // creating button
    listBtn.textContent = "Delete";
    listBtn.classList.add("deleteInstructionBtn");
    listBtn.addEventListener("click", function(event) {
        instructList.removeChild(listItem);
        instructionArray = instructionArray.filter(function(item) {
            return item !== instructTextField;
        });
        console.log(instructionArray);
    });

    listItem.appendChild(listBtn);
    instructList.appendChild(listItem);
}

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
document.getElementById("saveChangesBtnUpdate").addEventListener("click", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeID = urlParams.get('id');
    
    // looks for recipe in localStorage. If not found, return empty array.
    let recipesList = JSON.parse(localStorage.getItem("createdRecipes")) || [];
    
    if (recipeID) {
        // Searches for existing recipe using ID and finds index
        const chosenIndex = recipesList.findIndex(function(r) {
            return r.recipeID === parseInt(recipeID);
        });

        // if index found, update
        if (chosenIndex !== -1) {
            const updatedRecipe = {
                recipeID: parseInt(recipeID),
                title: document.getElementById("dishTitleUpdate").value,
                recipeImage: uploadedImageData,
                description: document.getElementById("dishDescrUpdate").value,
                prepTime: document.getElementById("prepTimeUpdate").value,
                cookTime: document.getElementById("cookTimeUpdate").value,
                servings: document.getElementById("servingsUpdate").value,
                ingredients: ingredientsArray,
                instructions: instructionArray
            };

            recipesList[chosenIndex] = updatedRecipe;
            saveRecipes(recipesList);
        } else {
            alert("Recipe not found!");
        }
    }
});

// saves to localstorage
function saveRecipes(recipesList) {
    localStorage.setItem("createdRecipes", JSON.stringify(recipesList));
    // reloads page and resets the addRecipe.html page so the user can add another recipe
    alert("Recipe successfully saved!");
    window.location.href = "index.html";
}