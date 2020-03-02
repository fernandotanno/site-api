'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('subtitle')
      table.string('content').notNullable()
      table.string('image')
      table.boolean('published').defaultTo(false)
      table.timestamps()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .onUpdate('cascade')
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostSchema
