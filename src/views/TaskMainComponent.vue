<script setup lang="ts">
import TaskSearchBar from '@/components/TaskMainComponent/TaskSearchBar.vue'
import TaskCreateBar from '@/components/TaskMainComponent/TaskCreateBar.vue'
import TaskFilterBar from '@/components/TaskMainComponent/TaskFilterBar.vue'
import TaskList from '@/components/TaskMainComponent/TaskList.vue'
</script>

<template>
  <main>
    <TaskSearchBar />
    <TaskCreateBar />
    <TaskFilterBar />
    <TaskList />
  </main>
</template>
