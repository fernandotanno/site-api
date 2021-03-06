'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 60).notNullable().unique()
      table.string('email', 60).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('about_me')
      table.string('avatar')
      table.enu('access_level', ['admin', 'author', 'reader']).notNullable().defaultTo('reader')
      table.boolean('blocked').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
