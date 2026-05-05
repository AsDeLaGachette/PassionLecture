<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'

const isAuthenticated = ref(false)
const router = useRouter()
onMounted(() => {
  isAuthenticated.value = !!localStorage.getItem('auth_token')
})
function logout() {
  AuthService.logout()
  isAuthenticated.value = false
  router.push({ name: 'Login' })
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link class="home-icon" :to="{ name: 'Home' }">Accueil</router-link>
    </div>
    <div class="nav-center">
      <h1 class="logo">LectureTif</h1>
    </div>
    <div class="nav-right">
      <router-link class="nav-icon" :to="{ name: 'MyBooks' }">Mes ouvrages</router-link>
      <router-link v-if="!isAuthenticated" class="nav-icon" :to="{ name: 'Login' }">Connexion</router-link>
      <button v-if="isAuthenticated" class="nav-icon" @click="logout">Déconnexion</button>
    </div>
  </nav>
</template>
