<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <el-button type="primary" @click="say">主要按钮{{ name }}</el-button>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
let name = '流星'
let age = 18
//方法
function say() {
  console.log(`我叫${name},今年${age}岁`)
}
</script>
