<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'

const props = defineProps({
  childInputValue: String
})

const inputValue = ref(props.childInputValue || '')

const emits = defineEmits(['update:childInputValue'])

const sendValueToParent = () => {
  emits('update:childInputValue', inputValue.value)
}

watch(
  () => props.childInputValue,
  (newValue) => {
    inputValue.value = newValue || ''
  }
)
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
