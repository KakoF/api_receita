'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredienteSchema extends Schema {
  up () {
    this.create('ingredientes', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('quantidade')
      table.integer('receita_id').unsigned().references('id').inTable('receitas')
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredientes')
  }
}

module.exports = IngredienteSchema
