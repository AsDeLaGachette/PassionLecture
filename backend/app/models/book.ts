import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Genre from './genre.js'
import Author from './author.js'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Review from './review.js'

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
  declare genre: BelongsTo<typeof Genre>

  @column()
  declare authorId: number

  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>

  @column()
  declare userId: number  

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Review) 
  declare reviews: HasMany<typeof Review>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}