'use strict'
const Receita = use('App/Models/Receita')
const base64Img = use('base64-img');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with receitas
 */
class ReceitaController {
  
  /**
   * Show a list of all receitas.
   * GET receitas
   *
   * @param {object} ctx
   */
  async index () {
    const receita = Receita.all()
    return receita
  }

  /**
   * Create/save a new receita.
   * POST receitas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['nome', 'preco', 'observacao'])
    const file = request.file('imagem', {
      types: ['image'],
      size: '10mb'
    })
    const imagem = base64Img.base64Sync(file.tmpPath)
    const receita = Receita.create({ ...data, imagem })
    return receita
  }

  /**
   * Display a single receita.
   * GET receitas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing receita.
   * GET receitas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update receita details.
   * PUT or PATCH receitas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a receita with id.
   * DELETE receitas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ReceitaController
