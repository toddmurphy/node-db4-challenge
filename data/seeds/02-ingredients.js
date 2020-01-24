exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('ingredients').insert([{ ingredient_name: 'salt' }, { ingredient_name: 'sugar' }, { ingredient_name: 'pepper' }, { ingredient_name: 'flour' }]);
};
