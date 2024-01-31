<script setup lang="ts">
import { ref } from 'vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import CustomInput from '@/components/UI/CustomInput.vue'

const inputValue = ref('')
</script>

<template>
  <CustomContainer>
    <CustomInput v-model:childValue="inputValue" />
  </CustomContainer>
</template>

<style scoped></style>
