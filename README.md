# abeginnersrecipeapp
Group Project for HCDD 340

# Code Documentation

## HTML

### `index.html`
This is the **Home** page of the app. It displays all saved recipes, each with an image and description.  
Clicking a recipe loads **`recipeView.html`** with a query string indicating the recipe’s ID.  
A search bar allows filtering recipes by name.

Recipes are organized as `<div>` elements using flexbox and wrapped in `<a>` tags linking to the recipe view page.

### `addRecipe.html`
Allows users to **add a new recipe** using HTML form elements.  
Collected data includes:

- Image (via device camera)
- Recipe name & description
- Prep and cook time
- Servings
- Ingredient list
- Instruction list

After clicking **Save**, the recipe is stored in localStorage.

### `editRecipe.html`
Allows users to **edit an existing recipe**.  
Accessible from `recipeView.html` via the Edit button.

The page loads form fields pre-populated with recipe data from localStorage, allowing the user to modify and save changes.

### `recipeView.html`
Used to **display a saved recipe**.  
Linked to `recipeView.js`, which loads data from localStorage and populates the page with the recipe’s:

- Title
- Image
- Ingredients
- Instructions
- Metadata (times, servings, etc.)

---

## CSS

### `styles.css`
Primary stylesheet for the project.  
Defines all major layout, spacing, and formatting across HTML pages.

---

## JavaScript

### `main.js`
Runs immediately after HTML loads.

#### `loadRecipes()`
Reads all recipes from localStorage and populates `index.html` with dynamically generated recipe cards.

### `captureImage.js`
Handles capturing and uploading images via device camera.  
Used by both `addRecipe.html` and `editRecipe.html`.

Captured images are saved into localStorage for previewing and attaching to recipes.

### `searchRecipe.js`
Provides recipe search functionality on the home page.

#### `searchRecipes()`
- Reads user input from search bar  
- Hides recipes whose titles do not match the query  
- Displays recipes that contain the query text  

### `NewRecipe.js`
Linked to `addRecipe.html`.  
Handles dynamic list creation and saving new recipes to localStorage.

#### Key Functions
- **`addIngred()` / `addInstruct()`**: Adds items to ingredient/instruction lists, each with a delete button.  
- **Save button function**: Collects all fields, constructs a recipe object, stores it in localStorage using JSON, and reloads the page.

### `editRecipe.js`
Linked to `editRecipe.html`.  
Uses the recipe ID from the query string to load existing data into the form.

#### Key Functions
- **`loadRecipeData()`**: Retrieves recipe data from localStorage and fills the form.  
- **`addIngredientToList()` / `addInstructionToList()`**: Populates saved items as list elements.  
- **`addIngred()` / `addInstruct()`**: Allows adding new ingredients/instructions with delete buttons.  
- **`saveRecipes()`**: Writes updated recipe data back into localStorage.

### `recipeView.js`
Handles loading the recipe selected from `index.html`.

#### Key Functions
- **`pushList(array, listElementID)`**: Appends list items to the given element.  
- **`loadRecipe()`**: Loads and displays the recipe.  
- **`deleteRecipe()`**: Deletes the recipe from localStorage.  
- **`editRecipe()`**: Redirects to `editRecipe.html` with the correct recipe ID.

---

## JSON

### `Recipe.json`
Template file used to define the default structure of a recipe object.

---

# Required Features Included

- ✓ Application installable through Chrome  
- ✓ Works on multiple devices  
- ✓ At least 3 interactive pages (`index.html`, `addRecipe.html`, `editRecipe.html`)  
- ✓ Uses localStorage for permanent data  
- ✓ Includes icon and persistent theme  
- ✓ Accessibility features (`alt` text, proper label/input pairing, hover states)  
- ✓ Full documentation  

---

# Bonus Features

### Camera Integration
The app uses the device camera to allow users to capture images and attach them to recipes.

