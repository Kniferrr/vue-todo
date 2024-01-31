<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

defineProps({
  childInputValue: String
})
const emits = defineEmits(['update:childInputValue'])

const sendValueToParent = () => {
  emits('update:childInputValue', inputValue.value)
}
</script>

<template>
  <input
    class="custominput"
    v-model="inputValue"
    @input="sendValueToParent"
    placeholder="Введите значение"
  />
</template>

<style scoped>
.custominput {
  background-color: var(--vt-c-black-soft);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  height: 30px;
  width: 100%;
  margin: 8px;
  color: var(--vt-c-text-dark-1);
}
</style>
