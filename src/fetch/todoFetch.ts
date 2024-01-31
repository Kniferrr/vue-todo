import axios from 'axios'
import type { TaskInterface } from '@/types/todoTypes'

const baseUrl = 'http://localhost:3002'

export const getUserTask = (login: string) => {
  return axios
    .get(`${baseUrl}/tasks/${login}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
    })
    .catch((error) => {})
}

export const addNewUserTask = async (login: string, task: string): Promise<void> => {
  try {
    await axios.post(`${baseUrl}/task/${login}`, { task: task })
  } catch (error) {
    /* empty */
  }
}

export const deleteUserTask = async (taskIndex: string, login: string) => {
  try {
    await axios.delete(`${baseUrl}/tasks/${login}`, {
      data: { taskIndex }
    })
  } catch (error) {
    /* empty */
  }
}

export const completeUserTask = async (task: TaskInterface, login: string) => {
  const taskUrl = `${baseUrl}/tasks/${login}`

  try {
    const taskIndex = task.index
    await axios.patch(taskUrl, { taskIndex })
  } catch (error) {
    console.log(error)
  }
}
