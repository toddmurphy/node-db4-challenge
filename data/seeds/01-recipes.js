exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'Todd famous chicken dog food', steps: 'mix long' },
    { recipe_name: 'Dad infamous hot wings', steps: 'mix more longer and longer' },
    { recipe_name: 'Liam sugar candy canes', steps: 'stop mixing' },
    { recipe_name: 'Alicia baked cake', steps: 'blend hard' }
  ]);
};
