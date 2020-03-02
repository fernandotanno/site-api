'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

class UserController {

    async index({ response }) {

        const user = await User.all()

        return response.status(200).json({
            data: user
        })
    }

    async show({ params, response }) {

        const user = await User.find(params.id)

        return response.status(200).json({
            data: user
        })

    }

    async store({ request, response }) {

        const { ...data } = request.all()

        const user = await User.create(data)

        return response.status(201).json({
            message: `Usuário ${user.username} cadastrado com sucesso!`,
            data: user
        })



    }
}

module.exports = UserController
