import factory from '@adonisjs/lucid/factories'
import Author from '#models/author'

export const AuthorFactory = factory
  .define(Author, async ({ faker }) => {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
    }
  })
  .build()