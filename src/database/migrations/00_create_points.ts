import Knex from 'knex';

//Cria tabelas
export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(),
        table.string('image').notNullable(),
        table.string('name').notNullable(),
        table.string('email').notNullable(),
        table.string('whatsapp').notNullable(),
        table.decimal('latitude').notNullable(),
        table.decimal('longitude').notNullable(),
        table.string('city').notNullable(),
        table.string('uf', 2).notNullable()
    });
}

//Volta atraz na criação das tableas - crtl Z
export async function down(kenx: Knex) {
    return kenx.schema.dropTable('points')
}