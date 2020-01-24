exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('ingredients').insert([
    { ingredient_name: 'salt', quantity: 10.7 },
    { ingredient_name: 'sugar', quantity: 10.5 },
    { ingredient_name: 'pepper', quantity: 10.5 },
    { ingredient_name: 'flour', quantity: 10.6 }
  ]);
};
