exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('meals', function (table) {
      table.increments('id').primary();
      table.enu('meal_type', ["Breakfast", "Lunch", 'Snack', "Dinner"]);
      table.timestamps(true, true);
    })
  ])
};
exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('meals')
  ]);
};