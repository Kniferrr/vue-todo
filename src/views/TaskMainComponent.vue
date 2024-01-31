<script setup lang="ts">
import TaskSearchBar from '../components/TaskSearchBar.vue'
import TaskCreateBar from '../components/TaskCreateBar.vue'
import TaskFilterBar from '../components/TaskFilterBar.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
  <main>
    <TaskSearchBar />
    <TaskCreateBar />
    <TaskFilterBar />
    <TaskList />
  </main>
</template>
