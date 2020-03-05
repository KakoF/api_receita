'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingrediente extends Model {
    receita () {
        return this.belongsTo('App/Models/Receita')
    }
}

module.exports = Ingrediente
