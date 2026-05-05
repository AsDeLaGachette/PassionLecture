<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'

const router = useRouter()
const form = ref({ email: '', password: '' })

const onLogin = async () => {
  try {
    await AuthService.login(form.value)
    router.push('/')
  } catch (err) {
    console.error('Login error:', err)
  }
}
</script>

<template>
    <main class="container auth-container">
        <div class="auth-card">
            <h2 class="auth-title">Connexion</h2>
            
            <form class="auth-form" @submit.prevent="onLogin">
                <div class="form-group" >
                    <label>Email</label>
                    <input v-model="form.email" type="email" class="form-input" placeholder="Exemple123@eduvaud.ch" required>
                </div>

                <div class="form-group">
                    <label>Mot de passe</label>
                    <input v-model="form.password" type="password" class="form-input" placeholder="••••••••••••••••" required>
                </div>

                <div class="auth-links">
                    <router-link class="link-secondary" :to="{ name: 'Signup' }">Pas de compte ?</router-link>
                </div>

                <div class="auth-buttons">
                    <router-link class="btn-secondary" :to="{ name: 'Signup' }">S'inscrire</router-link>
                    <button type="submit" class="btn-primary">Se connecter</button>
                </div>
            </form>
        </div>
    </main>
</template>