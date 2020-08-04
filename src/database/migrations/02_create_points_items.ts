import Knex from 'knex';

//Cria tabelas
export async function up(knex: Knex) {
    return knex.schema.createTable('points_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points'),

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')

    });
};

//Volta atraz na criação das tableas - crtl Z
export async function down(kenx: Knex) {
    return kenx.schema.dropTable('points_items')
};