'use strict'

/*
|--------------------------------------------------------------------------
| IngredienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class IngredienteSeeder {
  async run () {
    await Database.table('ingredientes').insert([
      {
          id: 1,
          nome: 'Milho',
          quantidade: 6,
          receita_id: 1,
      },
      {
        id: 2,
          nome: 'Hamburguer',
          quantidade: 2,
          receita_id: 1,
      },
      {
        id: 3,
          nome: 'Milho',
          quantidade: 6,
          receita_id: 1,
      },
      {
        id: 4,
        nome: 'Alface',
        quantidade: 3,
        receita_id: 2,
      },
      {
        id: 5,
        nome: 'Hamburguer',
        quantidade: 1,
        receita_id: 2,
      },
      {
        id: 6,
        nome: 'Ovo',
        quantidade: 2,
        receita_id: 3,
      },
      {
        id: 7,
        nome: 'Hamburguer',
        quantidade: 1,
        receita_id: 3,
      }
    ])
  }
}

module.exports = IngredienteSeeder