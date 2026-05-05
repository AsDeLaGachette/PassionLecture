import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('year')
      table.string('publisher')
      table.string('excerpt')
      table.integer('nbr_page')
      table.string('description')
      table.string('title')
      table.specificType('cover', 'LONGBLOB')
      // fk de genres
      table.integer('genre_id').unsigned().notNullable()
      table.foreign('genre_id').references('genres.id').onDelete('CASCADE')
      // fk de authors    
      table.integer('author_id').unsigned().notNullable()
      table.foreign('author_id').references('authors.id').onDelete('CASCADE')
      // fk de users    
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}