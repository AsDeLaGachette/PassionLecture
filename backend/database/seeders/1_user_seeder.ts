import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {

    const password = await hash.make('latif')

    await User.createMany([
      { 
        fullName: 'Admin Tif', 
        email: 'admin@test.com', 
        password: password 
      },
      { 
        fullName: 'Latif Krasniqi', 
        email: 'latif@test.com', 
        password: password 
      },
      { 
        fullName: 'Albert Braimi', 
        email: 'albert@test.com', 
        password: password 
      },
      { 
        fullName: 'Philophile Borboën', 
        email: 'guest@test.com', 
        password: password 
      },
      { 
        fullName: 'SuperTuff Dave', 
        email: 'dave@test.com', 
        password: password 
      },
    ])
  }
}