addEventListener('DOMContentLoaded', () => {
    //Load Recipes
    loadRecipes();
});

function loadRecipes(){
    let restoredRecipes = JSON.parse(localStorage.getItem("createdRecipes"));
    const container = document.querySelector(".cardContainer");
    container.innerHTML = "";

    restoredRecipes.forEach(recipe => {
        let recipeTitle = recipe.title;
        let recipeDescr = recipe.description;
        let recipePrep = recipe.prepTime;
        let recipeCook = recipe.cookTime;
        let recipeServings = recipe.servings;
        
        const card = document.createElement("a");
        // query string created here
        card.href = `recipeView.html?id=${recipe.recipeID}`;

        card.innerHTML = `
        <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC7QuVp-W5YBTP3qWiZIuSYFy8zkQFmLk8hBOvGhDG8UxuqyMilIJcuuQLhC151Qph0ISV7DKJ22xyW4XmSkBZ1lMTp9ixhQqYLx-VqRu&s=10" alt="${recipeTitle}">
        <h3>${recipeTitle}</h3>
        <p>Total Time: ${parseInt(recipePrep) + parseInt(recipeCook)} mins</p>
        <p>Servings: ${recipeServings} servings</p>
        <p>${recipeDescr}</p>
        </div>
        `

        container.appendChild(card);
    });
}