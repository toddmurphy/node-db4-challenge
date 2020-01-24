exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('recipe_ingredient').insert([
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 2, ingredient_id: 2 },
    { recipe_id: 1, ingredient_id: 1 }
  ]);
};
