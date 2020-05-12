
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('VIN', 20).notNullable();
        tbl.string('make', 20).notNullable();
        tbl.string('model', 20).notNullable();
        tbl.string('mileage', 20).notNullable();

        tbl.string('transmissionType', 20);
        tbl.string('status',20);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExist('cars');
};
