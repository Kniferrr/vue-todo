<script setup lang="ts">
import CustomContainer from '@/components/UI/CustomContainer.vue'
import { onMounted } from 'vue'
import { useTaskStore } from '@/store/useTaskStore'
import { storeToRefs } from 'pinia'
import CustomButton from '@/components/UI/CustomButton.vue'

const taskStore = useTaskStore()
const { sortTasks } = storeToRefs(taskStore)
const { getTasks, deleteTask, completeTask } = taskStore

onMounted(async () => {
  getTasks()
})
</script>

<template>
  <CustomContainer>
    <div class="taskList">
      <span v-for="task in sortTasks" v-bind:key="task.index">
        <div
          @click="() => completeTask(task.index)"
          :class="{ complied: task.completed }"
          class="taskList-taskName"
        >
          {{ task.task }}
        </div>
        <CustomButton @click="() => deleteTask(task.index)">DELETE</CustomButton>
      </span>
    </div>
  </CustomContainer>
</template>

<style scoped>
.complied {
  color: var(--vt-c-text-dark-2);
}
.taskList {
  display: flex;
  flex-direction: column;
  color: var(--vt-c-text-dark-1);

  span {
    display: flex;
    flex-direction: row;
  }
}
.taskList-taskName {
  margin: 10px;
  background-color: transparent;

  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
