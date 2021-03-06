'use strict'

class UserUpdate {

  get rules() {
    return {
      username: 'required|min:4|max:60',
      email: 'required|email|max:60',
      password: 'required'
    }
  }

  get messages() {
    return {
      'username.required': 'Nome: obrigatório.',
      'username.min': 'Nome: quantidade minima de caracteres 4.',
      'username.max': 'Nome: quantidade maxima de caracteres 60.',
      'email.required': 'E-mail: obrigatório.',
      'email.email': 'E-mail: inválido.',
      'email.max': 'E-mail: quantidade maxima de caracteres 60.',
      'password.required': 'Senha: campo é obrigatório.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }

}

module.exports = UserUpdate
