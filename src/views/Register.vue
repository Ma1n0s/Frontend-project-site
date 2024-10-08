<template>
  <div class="register">
      <form @submit.prevent="register">
          <h1>Регистрация</h1>
          <div class="form-group">
              <label for="username">Логин:</label>
              <input v-model="data.username" type="text" id="username" placeholder="Логин..." required />
          </div>
          <div class="form-group">
              <label for="email">Email:</label>
              <input v-model="data.email" type="email" id="email" placeholder="Email..." required />
          </div>
          <div class="form-group">
              <label for="password">Пароль:</label>
              <input v-model="data.password" type="password" id="password" placeholder="Пароль..." required />
          </div>
          <div class="form-group">
              <label for="password"> Подтверж Пароль:</label>
              <input v-model="data.password_confirmation" type="password" id="password_confirmation" placeholder="Пароль..." required />
          </div>
          <button type="submit" variant="primary">Зарегистрироваться</button>
          <!-- <p>Уже есть учётная запись? <router-link to="/login">Войти</router-link></p> -->
      </form>
  </div>
</template>

<script setup>
import router from '@/router';
import { AuthService } from '../services/auth';
import { reactive } from 'vue';

const data = reactive({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const register = async () => {
    try {
        const r = await AuthService.register({name: data.username,  email: data.email, password: data.password,password_confirmation: data.password_confirmation});
          localStorage.setItem('token', r.data.token); // Сохранение токена
            router.push('/login'); 
    } catch (err) {
        console.log(err);
    }
}
</script>