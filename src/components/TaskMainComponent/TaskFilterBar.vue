<script setup lang="ts">
import { ref } from 'vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import { FilterStatus, type filterType } from '@/types/TaskFilterBar'
import { useTaskStore } from '@/store/useTaskStore'

const taskStore = useTaskStore()
const { setFilterType } = taskStore
</script>

<template>
  <CustomContainer>
    <CustomButton class="taskfilterbar-button" @click="() => setFilterType(null)">ALL</CustomButton>
    <CustomButton class="taskfilterbar-button" @click="() => setFilterType(false)"
      >COMPLETED</CustomButton
    >
    <CustomButton class="taskfilterbar-button" @click="() => setFilterType(true)"
      >UNCOMPLETED</CustomButton
    >
  </CustomContainer>
</template>

<style scoped>
.taskfilterbar-button {
  border: 0px;
  border-radius: 5px;
}
</style>
