import Knex from 'knex';

//Cria tabelas
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary(),
        table.string('image').notNullable(),
        table.string('title').notNullable()

    });
};

//Volta atraz na criação das tableas - crtl Z
export async function down(kenx: Knex) {
    return kenx.schema.dropTable('items')
};