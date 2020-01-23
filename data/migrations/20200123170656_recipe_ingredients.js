exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('recipe_name', 255)
        .notNullable()
        .index();
    })

    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('ingredient_name', 255)
        .notNullable()
        .index();

      tbl.float('qauntity').notNullable();
    })

    .createTable('steps', tbl => {
      tbl.increments();

      tbl.string('steps_name', 255);
      tbl.string('description', 255);

      tbl
        .integer('ingredients_id')
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('recipe_id');
    })

    .createTable('recipe_ingredient', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {};
