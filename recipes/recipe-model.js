const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getIngredients,
  getInstructions
};

//add helper functions here

function getRecipes() {
  return db('recipes');
}

function getIngredients(recipe_id) {
  return db('ingredients')
    .join('recipe_ingredient', 'recipe_ingredient.id', 'ingredients.id')
    .select('ingredients.ingredient_name', 'recipe_ingredient.quantity')
    .where('recipe_ingredient.recipe_id', recipe_id);
}

// should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db('recipes')
    .select('recipes.steps')
    .where('recipes.id', id)
    .first();
}
