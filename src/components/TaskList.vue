<script setup lang="ts">
import CustomContainer from '@/components/UI/CustomContainer.vue'
import { getUserTask } from '@/fetch/todoFetch'
import type { TaskInterface } from '@/types/todoTypes'
import { onMounted, ref, type Ref } from 'vue'

const tasks: Ref<TaskInterface[]> = ref([])

onMounted(async () => {
  const data: TaskInterface[] = await getUserTask('Knifer')
  tasks.value = data
})
</script>

<template>
  <CustomContainer>
    <div class="tasklist">
      <span v-for="task in tasks" v-bind:key="task.index">{{ task.task }}</span>
    </div>
  </CustomContainer>
</template>

<style scoped>
.tasklist {
  display: flex;
  flex-direction: column;
}
</style>
