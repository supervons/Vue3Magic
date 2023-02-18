<template>
  <h1>{{ msg }}</h1>
  <button @click="add">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p class="test">{{ hobby }}</p>
  <p>{{ fullName }}</p>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const props = defineProps({
  msg: String,
})

let hobby = reactive(['刷剧', '吃鸡', '睡觉'])

let count = ref(0)

let fullName = computed(() => {
  return `${hobby.join(' - ')} - ${count.value}`
})

function add() {
  count.value++
  hobby[2] = '打豆豆'
}
</script>
<style scoped lang="scss">
$font-size-normal: 25px;

.test {
  font-size: $font-size-normal;
  color: blue;
}
</style>