addEventListener('DOMContentLoaded', () => {
    loadRecipes();
});

function loadRecipes(){
    let restoredRecipes = JSON.parse(localStorage.getItem("createdRecipes"));
    restoredRecipes.forEach(recipe => {
        console.log(JSON.stringify(recipe));
    });
    
    const ontainer = document.querySelector(".cardContainer");
    container.innerHTML = "";


}