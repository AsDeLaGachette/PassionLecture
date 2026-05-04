import vine from '@vinejs/vine'
const ReviewValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(2).maxLength(255),
    rating: vine.number().min(1).max(5),
    comment: vine.string().minLength(2).maxLength(255),
    bookId: vine.number().exists(async (db, value) => {
      const book = await db.from('books').where('id', value).first()
      return !!book
    }),
    userId: vine.number().exists(async (db, value) => {
      const user = await db.from('users').where('id', value).first()
      return !!user
    }),
  })
)
export { ReviewValidator }
