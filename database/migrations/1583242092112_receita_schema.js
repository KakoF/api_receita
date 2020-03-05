'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceitaSchema extends Schema {
  up () {
    this.create('receitas', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.binary('imagem', [50000])
      table.decimal('preco', [5,2]).notNullable()
      table.text('observacao')
      table.timestamps()
    })
  }

  down () {
    this.drop('receitas')
  }
}

module.exports = ReceitaSchema
