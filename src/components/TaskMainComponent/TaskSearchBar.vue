<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import { useTaskStore } from '@/store/useTaskStore'

const inputValue: Ref<string> = ref('')

const taskStore = useTaskStore()
const { setFilterSearch } = taskStore

watch(
  () => inputValue.value,
  (newValue) => {
    setFilterSearch(newValue)
  }
)
</script>

<template>
  <CustomContainer>
    <CustomInput v-model:childInputValue="inputValue" />
  </CustomContainer>
</template>

<style scoped></style>
