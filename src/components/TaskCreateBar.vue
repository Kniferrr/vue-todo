<script setup lang="ts">
import { ref, type Ref } from 'vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import { addNewUserTask } from '@/fetch/todoFetch'

const inputValue: Ref<string> = ref('')

const onSubmitCarateTask = () => {
  inputValue.value && addNewUserTask('Knifer', inputValue.value)
}
</script>

<template>
  <CustomContainer>
    <CustomInput v-model:childInputValue="inputValue" />
    <CustomButton @click="onSubmitCarateTask">Создать</CustomButton>
  </CustomContainer>
</template>

<style scoped></style>
