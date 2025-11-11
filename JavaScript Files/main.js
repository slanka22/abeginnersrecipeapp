addEventListener('DOMContentLoaded', () => {
    //Load Recipes
    loadRecipes();
});

function loadRecipes(){
    let restoredRecipes = JSON.parse(localStorage.getItem("createdRecipes"));
    const container = document.querySelector(".cardContainer");

    restoredRecipies.foreach(recipe => {
        let recipeTitle = recipe.title;
        let recipeDescr = recipe.description;
        let recipePrep = recipe.prepTime;
        let recipeCook = recipe.cookTime;
        let recipeServings = recipe.servings; 
        let recipeIngrid = recipe.ingridients; 
        let recipeInstruct = recipe.instructions; 
        
        const card = document.createElement("a");
        card.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC7QuVp-W5YBTP3qWiZIuSYFy8zkQFmLk8hBOvGhDG8UxuqyMilIJcuuQLhC151Qph0ISV7DKJ22xyW4XmSkBZ1lMTp9ixhQqYLx-VqRu&s=10" alt="${recipeTitle}">
        <h3>${recipeTitle}</h3>
        <p>Total Time: ${recipePrep + recipeCook} mins</p>
        <p>Servings: ${recipeServings} servings</p>
        <p>${recipeDescr}</p>`

        container.appendChild(card);
    })
}