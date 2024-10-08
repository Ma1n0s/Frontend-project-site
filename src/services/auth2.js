import { reactive } from 'vue';

export const authServices = reactive({
  isAuthenticated: false,

  login() {
    this.isAuthenticated = true;
  },

  logout() {
    this.isAuthenticated = false;
  },
});