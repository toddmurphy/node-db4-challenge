exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('recipes').insert([{ recipe_name: 'Todd famous chicken dog food' }, { recipe_name: 'Dad infamous hot wings' }, { recipe_name: 'Liam sugar candy canes' }, { recipe_name: 'Alicia baked cake' }]);
};
