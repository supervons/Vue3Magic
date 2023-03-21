<template>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.onkeydown = function (event) {
    let e = event || window.event;
    console.log(e);
    if(e.key === 'k' && e.metaKey){
      alert(`what's up bro!`)
    }
  }
});
</script>