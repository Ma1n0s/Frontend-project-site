// import { BootstrapVue } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);

// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

// import Vuelidate from 'vuelidate';
// Vue.use(Vuelidate)

import './assets/main.css'

import { createApp } from 'vue'

// import Vue from 'vue';
import App from './App.vue'


import router from './router'
import axios, { Axios } from 'axios'
// axios.defaults.baseURL = 'http://http://localhost:5173/login';

const url = import.meta.env.VITE_BACKEND_URL
axios.get(`${url}/sanctum/csrf-cookie`);


const app = createApp(App)

// app.use(store)
app.use(router)

app.mount('#app')


