import { completeUserTask, deleteUserTask, getUserTask } from '@/fetch/todoFetch'
import type { TaskInterface } from '@/types/todoTypes'
import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

export const useTaskStore = defineStore('counter', () => {
  const tasks: Ref<TaskInterface[]> = ref([])
  const filterType: Ref<boolean | null> = ref(null)
  const filterSearch: Ref<string> = ref('')

  const sortTasks: ComputedRef<TaskInterface[]> = computed(() => {
    const sort = tasks.value.filter(
      (t) => t.completed !== filterType.value && t.task.includes(filterSearch.value)
    )
    return sort
  })

  async function getTasks() {
    setTimeout(async () => {
      const data: TaskInterface[] = await getUserTask('Knifer')
      tasks.value = data
    }, 100)
  }

  async function deleteTask(index: string) {
    await deleteUserTask('Knifer', index)
    getTasks()
  }

  async function completeTask(index: string) {
    await completeUserTask('Knifer', index)
    getTasks()
  }

  function setFilterType(filterPayload: boolean | null) {
    filterType.value = filterPayload
  }

  function setFilterSearch(filterPayload: string) {
    filterSearch.value = filterPayload
  }

  return {
    tasks,
    filterType,
    sortTasks,
    filterSearch,
    getTasks,
    deleteTask,
    setFilterType,
    setFilterSearch,
    completeTask
  }
})
