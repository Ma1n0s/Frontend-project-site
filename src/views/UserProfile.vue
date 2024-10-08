<!-- <template>
    <main>
      <code>
        {{ user ? user.username : "Пользователь не залогинен" }}
      </code>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const user = ref(null);
  
  onMounted(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          user.value = JSON.parse(storedUser);
      }
  });
  </script> -->