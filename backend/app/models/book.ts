import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Genre from './genre.js'
import Author from './author.js'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare year: number

  @column()
  declare publisher: string

  @column()
  declare excerpt: string

  @column()
  declare nbrPage: number

  @column()
  declare description: string

  @column()
  declare title: string

  @column()
  declare cover: Buffer

  @column()
  declare genreId: number

  @belongsTo(() => Genre)
  declare genre: any

  @column()
  declare authorId: number

  @belongsTo(() => Author)
  declare author: any

  @column()
  declare userId: number

  @belongsTo(() => Author)
  declare user: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}