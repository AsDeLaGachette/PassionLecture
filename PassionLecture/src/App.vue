<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { ref, onMounted } from 'vue';
import { bookService } from './services/BookService';

const { books, fetchData, getAuthorName } = bookService();

onMounted(fetchData);

</script>

<template>
  <Header></Header>
  <main class="container">
    <section class="hero-section">
      <h2 class="page-title">Les meilleurs ouvrages pour les<br />fans de l'ETML</h2>

      <a href="#" class="btn-view-library">Voir bibliothèque</a>

      <ul class="books-grid">
        <li class="book-item" v-for="book in books" :key="book.id">
          <a href="detail.html" class="book-card">
            <div class="book-thumbnail"></div>
            <div class="book-info">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-author">{{ getAuthorName(book.author_id) }}</p>
              <div class="book-rating">
                <span class="star-filled">★</span><span class="star-filled">★</span>
                <span class="star-filled">★</span><span class="star-filled">★</span>
                <span class="star-empty">☆</span>
              </div>
              <p class="book-meta">Vu le</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </main>
  <Footer></Footer>
</template>
