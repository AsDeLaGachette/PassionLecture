import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from './user.js'
import Book from './book.js'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare rating: number

  @column()
  declare comment: string

  @column()
  declare date_: string

  @column()
  declare usersId: number

  @belongsTo(() => User, {
    foreignKey: 'usersId',
  })
  declare user: any

  @column()
  declare bookId: number

  @belongsTo(() => Book)
  declare book: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}