<script setup>
import { ref, watch } from 'vue'
import BookService from '@/services/BookService'

const props = defineProps(['book'])
const nextImages = ref([])

watch(
  () => props.book,
  async (newBook) => {
    if (!newBook?.id) return

    nextImages.value = []
    const currentId = newBook.id

    for (let i = 1; i <= 3; i++) {
      const id = currentId + i
      const res = await BookService.getBook(id)
      if (res.data?.img) {
        nextImages.value.push(res.data.img)
        if (nextImages.value.length >= 3) return
      }
    }

    let fallbackId = 1
    while (nextImages.value.length < 3) {
      const res = await BookService.getBook(fallbackId)
      if (res.data?.img) {
        nextImages.value.push(res.data.img)
      }
      fallbackId++
    }
  },
  { immediate: true },
)
</script>

<template>
  <main class="container detail-container">
    <div class="detail-layout">
      <div class="detail-left">
        <img class="book-cover-large" :src="book?.img" alt="" />
        <div class="small-thumbnails">
            <img
              v-for="(imgUrl, index) in nextImages"
              :key="index"
              class="small-thumb"
              :src="imgUrl"
              alt=""
            />
        </div>
      </div>

      <div class="detail-right">
        <div class="info-card">
          <h2>{{ book?.title }}</h2>
          <div class="detail-rating">
            <span class="star-filled">★</span>
            <span class="star-filled">★</span>
            <span class="star-filled">★</span>
            <span class="star-filled">★</span>
            <span class="star-empty">☆</span>
            <span class="rating-text">4.0/5</span>
          </div>
          <div class="info-text">
            <p>
              <strong>{{ book?.author.firstname }} {{ book?.author.lastname }}</strong>
            </p>
            <p>{{ book?.description }}</p>
          </div>

          <div class="quality-section">
            <div class="quality-item">
              <h3>Qualité 01</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua quis
              </p>
            </div>
            <div class="quality-item">
              <h3>Qualité 02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua quis
              </p>
            </div>
            <div class="quality-item">
              <h3>Qualité 03</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua quis
              </p>
            </div>
            <div class="quality-item">
              <h3>Qualité 04</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua quis
              </p>
            </div>
          </div>
          <RouterLink :to="{ name: 'ReviewAdd' }" class="btn-add-review"
            >Ajouter un avis</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
