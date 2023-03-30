<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <KeyDown />
  <div>CMD + K 弹出问候语</div>
  <el-button type="primary" @click="say">主要按钮{{ name }}</el-button>
  <br />
  <br />
  <div>下列功能仅在移动端生效</div>
  <a v-for="item of h5PayList" :key="item.name" :href="item.url">
    {{ `${item.name}打开支付宝` }}<br
  /></a>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import KeyDown from './components/KeyDown.vue';
let name = ref('流星');
let age = 18;
let h5PayList = [
  {
    name: 'Android',
    url: "alipays://platformapi/startapp?appId=20000067&url='+encodeURIComponent(alipayUrl)"
  },
  {
    name: 'iOS',
    url: "alipay://platformapi/startapp?appId=20000067&url='+encodeURIComponent(alipayUrl)"
  }
];
//方法
function say() {
  name.value = name.value + '陨落刀';
  console.log(`我叫${name},今年${age}岁`);
}
</script>
