'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */

const UserSeeder = require('./UserSeeder')

class RunDatabaseSeeder {
  async run() {
    await UserSeeder.run()
  }
}

module.exports = RunDatabaseSeeder
