<script setup lang="ts">
import { ref } from 'vue'
import CustomContainer from '@/components/UI/CustomContainer.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import { FilterStatus, type filterType } from '@/types/TaskFilterBar'

const sortValue = ref(FilterStatus.ALL)
const cengeIntut = (value: filterType) => {
  sortValue.value = value
}
</script>

<template>
  <CustomContainer>
    <CustomButton class="taskfilterbar-button" @click="() => cengeIntut(FilterStatus.ALL)"
      >ALL</CustomButton
    >
    <CustomButton class="taskfilterbar-button" @click="() => cengeIntut(FilterStatus.COMPLETED)"
      >COMPLETED</CustomButton
    >
    <CustomButton class="taskfilterbar-button" @click="() => cengeIntut(FilterStatus.UNCOMPLETED)"
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
