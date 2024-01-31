<script setup lang="ts">
import { ref, type Ref } from 'vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import { addNewUserTask } from '@/fetch/todoFetch'
import { useTaskStore } from '@/store/useTaskStore'

const taskStore = useTaskStore()
const { getTasks } = taskStore

const inputValue: Ref<string> = ref('')

const onSubmitCarateTask = () => {
  if (inputValue.value) {
    addNewUserTask('Knifer', inputValue.value)
    getTasks()
    inputValue.value = ''
  }
}
</script>

<template>
  <CustomContainer>
    <CustomInput v-model:childInputValue="inputValue" />
    <CustomButton @click="onSubmitCarateTask">Создать</CustomButton>
  </CustomContainer>
</template>

<style scoped></style>
