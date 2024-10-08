<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const date = reactive([]) 
axios.get("https://jsonplaceholder.typicode.com/users").then((d)=> {
  date.push(...d.data);
  console.log(date)
}) //лямбдовая функция
console.log(date)
</script>

<template>
  <main>
    <code>
      {{ date.length ? date[0].name : "загрузка" }}
    </code>
  </main>
</template>
