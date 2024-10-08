<template>
  <div>
    <input type="file" @change="onFileChange" accept="image/*" />
    <img :src="imageUrl" alt="User Image" v-if="imageUrl" class="user-image" />
    <img src="/default-image.png" alt="Default Image" v-else class="default-image" />
    <p>Принимает только PNG Картинки</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const imageUrl = ref(null);
const defaultImageUrl = '/default-image.png';
const url = import.meta.env.VITE_BACKEND_URL
const fetchUserImage = async () => {
  try {
    const response = await axios.get(`${url}/api/user/image`,{
      withCredentials:true,
      
      headers: {
        "Authorization" :"Bearer " + localStorage.getItem("token"),
        'Content-Type': 'multipart/form-data',
      },
    });
    imageUrl.value = response.data.img ? `${url}/storage/${response.data.img}` :defaultImageUrl;
  } catch (error) {
    console.error('Ошибка при загрузке изображения пользователя:', error);
    imageUrl.value = defaultImageUrl; 
  }
};

const onFileChange = async (event) => {
  const file = event.target.files[0];
  
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);
  
  try {
    const url = import.meta.env.VITE_BACKEND_URL
    await axios.post(`${url}/api/user/upload-image`, formData, {
      withCredentials:true,
      
      headers: {
        "Authorization" :"Bearer " + localStorage.getItem("token"),
        'Content-Type': 'multipart/form-data',
      },
    });
    await fetchUserImage(); 
  } catch (error) {
    console.error('Ошибка при загрузке изображения:', error);
  }
};

onMounted(fetchUserImage);
</script>

<style scoped>
.user-image, .default-image {
  max-width: 200px; 
  max-height: 200px; 
  width: auto; 
  height: auto;
}
</style>