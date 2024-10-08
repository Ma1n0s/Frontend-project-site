import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL
const API_URL = `${url}/api`;

export const AuthService = {
    login(credentials) {
        return axios.post(`${API_URL}/login`, credentials, {withCredentials:true});
    },
    register(userData) {
        return axios.post(`${API_URL}/register`, userData); 
    },
    logout() {
        return axios.post(`${API_URL}/logout`,{},{withCredentials:true} );
    },
    getUser() {
        return axios.get(`${API_URL}/user`);
    }
};


