exports.up = function(knex) {
  return knex.schema
    .table('ingredients', tbl => {
      tbl.dropColumn('quantity');
    })
    .table('recipe_ingredient', tbl => {
      tbl.float('quantity');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('ingredients', tbl => {
      tbl.float('quantity');
    })
    .table('recipe_ingredient', tbl => {
      tbl.dropColumn('quantity');
    });
};
