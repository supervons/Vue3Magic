<template>
  <h1>{{ msg }}</h1>
  <button @click="add">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p class="test">{{ hobby }}</p>
  <p>{{ fullName }}</p>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

const props = defineProps({
  msg: String,
})

let hobby = reactive(['刷剧', '吃鸡', '睡觉'])

let count = ref(0)

let fullName = computed(() => {
  return `${hobby.join(' - ')} - ${count.value}`
})

// Functional watch
watch(count, (newValue, oldValue) => {
  console.log(`This count is add, current:${newValue} , old:${oldValue}`)
})

// Functional watch multiple value
watch([count, () => [...hobby]], (newValue, oldValue) => { // watch object and array need like this.
  console.log(`This count is add, current:${newValue} , old:${oldValue}`)
})

watchEffect(() => {
  let tempCount = count
  console.log('exec:' + tempCount.value)
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