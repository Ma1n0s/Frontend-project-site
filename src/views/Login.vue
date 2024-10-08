<template>
    <div class="login">
        <form @submit.prevent="login">
            <h1>Войти на сайт</h1>
            <div class="form-group">
                <label for="email">Логин:</label>
                <input v-model="data.email" type="text" id="email" placeholder="Логин..." required />
            </div>
            <div class="form-group">
                <label for="password">Пароль:</label>
                <input v-model="data.password" type="password" id="password" placeholder="Пароль..." required />
            </div>
            <button type="submit" variant="primary">Войти</button>
        </form>
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
  import { AuthService } from '../services/auth';
  import { reactive } from 'vue';
  
  const data = reactive({
      email: '',
      password: ''
  })
  
  const login = async() => {
      try {
          const r = await AuthService.login({ email: data.email, password: data.password });
          localStorage.setItem('token', r.data.token); // Сохранение токена
          router.push('/'); 
      } catch (err) {
          console.log(err);
      }
  }

// const login = async() => {
//     try {
//         const r = await AuthService.login({ email: data.email, password: data.password });
//         localStorage.setItem('token', r.data.token); // Сохраняем токен
//         axios.defaults.headers.common['Authorization'] = Bearer `${r.data.token}`;
//         router.push('/'); 
//     } catch (err) {
//         console.log(err);
//     }
// }
</script>

