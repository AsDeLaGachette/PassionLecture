import fs from 'node:fs/promises'
import Book from '#models/book'
import type { HttpContext } from '@adonisjs/core/http'
import { BookValidator } from '#validators/book'
export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const response = await Book.query().orderBy('title', 'asc')
    return response
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(BookValidator)
    const coverBuffer = await fs.readFile(data.cover.tmpPath!)
    const book = await Book.create({ ...data, cover: coverBuffer })
    return book
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return book
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(BookValidator)
    const coverBuffer = await fs.readFile(data.cover.tmpPath!)

    const book = await Book.findOrFail(params.id)
    book.merge({ ...data, cover: coverBuffer })
    return book.save()
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return book.delete()
  }
}