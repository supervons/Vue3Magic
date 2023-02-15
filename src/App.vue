<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <el-button type="primary" @click="say">主要按钮{{ name }}</el-button>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
let name = ref('流星')
let age = 18
//方法
function say() {
  name.value = name.value + '陨落刀'
  console.log(`我叫${name},今年${age}岁`)
}
</script>
