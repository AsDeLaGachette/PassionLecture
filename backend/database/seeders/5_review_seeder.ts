import Review from '#models/review'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    const date = DateTime.now()
    await Review.createMany([
      { bookId: 1, title: "J'aime bien", rating: 4, comment: 'Un classique magnifique.', userId: 1, createdAt: date },
      { bookId: 2, title: "J'aime bien", rating: 4, comment: "Très prenant.", userId: 2, createdAt: date },
      { bookId: 2, title: "J'aime bien", rating: 4, comment: "Latifffff", userId: 1, createdAt: date },
      { bookId: 3, title: "J'aime latif", rating: 2, comment: "Amour envers cet ouvrage.", userId: 1, createdAt: date },
      { bookId: 1, title: "Le quebectif", rating: 5, comment: "Le quebec supprimer définitement", userId: 1, createdAt: date },
      { bookId: 3, title: "J'aime latif", rating: 5, comment: "Latif m'apporte des belles choses", userId: 1, createdAt: date },
      { bookId: 4, title: "J'adore", rating: 5, comment: "wfnaénwkfakfw", userId: 1, createdAt: date },
      { bookId: 1, title: "J'aime", rating: 3, comment: "J'adore le livre", userId: 1, createdAt: date },
    ])
  }
}