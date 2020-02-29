'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')cd 

class UserSeeder {
  static async run() {
    await Factory
      .model('App/Models/User')
      .create()
  }
}
  
module.exports = UserSeeder
