import apiClient from "./api"

export default {
  getBooks() {
    return apiClient.get('/books')
  },
  getBook(id) {
    return apiClient.get(`/books/${id}`)
  },
  getBookFromUser() {
    return apiClient.get(`/me/books`)
  },
  addBook(book) {
    return apiClient.post('/books', book)
  },
  updateBook(id, book) {
    return apiClient.put(`/books/${id}`, book)
  },
  deleteBook(id, book) {
    return apiClient.delete(`/books/${id}`, book)
  }
}
