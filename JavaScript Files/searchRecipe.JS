document.querySelector("#searchButton").addEventListener("click", searchRecipes);

document.querySelector("#clearSearchButton").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    searchRecipes();
});

function searchRecipes() {
    try {
        const searchInput = document.getElementsById("searchInput").value.toLowerCase();
        const cardContainer = document.getElementById("cardContainer");
        for (let card of cardContainer.children) {
            const title = card.querySelector(".cardTitle").textContent.toLowerCase();
            if (title.includes(searchInput)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        }
    } catch (error) {
        alert("An error occurred while searching for recipes. Please adjust your search query and try again.");
    }
}