'use strict'

/*
|--------------------------------------------------------------------------
| ReceitaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class ReceitaSeeder {
  async run () {
    await Database.table('receitas').insert([
      {
          id: 1,
          nome: 'X-Tudo',
          preco: 15.50,
      },
      {
        id: 2,
        nome: 'X-Alface',
        preco: 13.31
      },
      {
        id: 3,
        nome: 'X-Ovo',
        preco: 9.99
      }
    ])
  }
}

module.exports = ReceitaSeeder
