/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import BooksController from '#controllers/books_controller'
import AuthorsController from '#controllers/authors_controller'
import ReviewsController from '#controllers/reviews_controller'

router.group(() => {
  router .group(() => {
      router.resource('books', BooksController).apiOnly()
      router.resource('authors', AuthorsController).apiOnly()
      router.group(() => {
          router.resource('reviews', ReviewsController).apiOnly()
        }).prefix('/books/:book_id')
    })
    router.get('/me/books', [BooksController, 'getMyBooks']).use(middleware.auth())
  /*.use(middleware.auth())

    router
      .group(() => {
        router.post('register', [AuthController, 'register'])
        router.post('login', [AuthController, 'login'])
        router.post('logout', [AuthController, 'logout']).use(middleware.auth())
      })
      .prefix('user')*/
})
.prefix('/api')