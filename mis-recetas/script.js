//menu hamburguesa 
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

// Array para almacenar las recetas
let recipes = [];

// Referencias a los elementos del DOM
const recipeForm = document.getElementById('recipe-form');
const recipeNameInput = document.getElementById('recipe-name');
const imageUrlInput = document.getElementById('image-url');
const categoryInput = document.getElementById('category');
const ingredientsInput = document.getElementById('ingredients');
const instructionsInput = document.getElementById('instructions');
const recipeList = document.getElementById('recipe-list');
const searchInput = document.getElementById('search');

// Función para agregar una receta
recipeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const recipe = {
    name: recipeNameInput.value,
    imageUrl: imageUrlInput.value,
    category: categoryInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value
  };

  // Agregar receta al array
  recipes.push(recipe);

  // Limpiar el formulario
  recipeForm.reset();

  // Actualizar la lista de recetas
  displayRecipes();
});

// Función para mostrar las recetas
function displayRecipes() {
  recipeList.innerHTML = '';
  
  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.classList.add('recipe-item');

    // Crear contenido de la receta
    li.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <h1>${recipe.category}</h1>
      <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
      <p><strong>Instrucciones:</strong> ${recipe.instructions}</p>
      <button class="delete-btn" onclick="deleteRecipe(${index})">Eliminar</button>
    `;

    // Agregar la receta a la lista
    recipeList.appendChild(li);
  });
}

// Función para eliminar receta
function deleteRecipe(index) {
  recipes.splice(index, 1);
  displayRecipes();
}

// Función para buscar recetas
function searchRecipe() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  // Mostrar las recetas filtradas
  recipeList.innerHTML = '';
  filteredRecipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.classList.add('recipe-item');

    li.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <h1>${recipe.category}</h1>
      <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
      <p><strong>Instrucciones:</strong> ${recipe.instructions}</p>
      <button class="delete-btn" onclick="deleteRecipe(${index})">Eliminar</button>
    `;

    recipeList.appendChild(li);
  });
}