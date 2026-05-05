<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'

const router = useRouter()

const form = ref({
  fullName: '',
  email: '',
  password: '',
})

async function onRegister() {
  try {
    await AuthService.register(form.value)

    router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main class="container auth-container">
    <div class="auth-card">
      <h2 class="auth-title">S'inscrire</h2>

      <form class="auth-form" @submit.prevent="onRegister">
        <div class="form-group">
          <label>Nom complet</label>
          <input
            v-model="form.fullName"
            type="text"
            class="form-input"
            placeholder="Latif Krasniqi"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-input"
            placeholder="Exemple123@eduvaud.ch"
          />
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input
            v-model="form.password"
            type="password"
            class="form-input"
            placeholder="••••••••••••••••"
          />
        </div>

        <div class="auth-links">
          <router-link class="link-secondary" :to="{ name: 'Login' }">Déjà un compte ?</router-link>
        </div>

        <div class="auth-buttons">
          <router-link class="btn-secondary" :to="{ name: 'Login' }">Connexion</router-link>
          <button type="submit" class="btn-primary">S'inscrire</button>
        </div>
      </form>
    </div>
  </main>
</template>
