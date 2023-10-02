<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

let me = { name: "ReactMiami" as "ReactMiami" };

let friend = 1;
friend = friend || 0;

const list = [{name: "vinicius",password: "1234567",age: 21 },{name: "vinicius",password: "1234567",age: 21 },{name: "vinicius",password: "1234567",age: 21 },{name: "vinicius",password: "1234567",age: 21 },{name: "vinicius",password: "1234567",age: 21 },
];
const ternary = friend ? "something" : "something else";

console.log(friend, me, list, ternary);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" class="logo" alt="Vite logo">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
