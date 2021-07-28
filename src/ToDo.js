import React from 'react'

import TasksList from './components/TasksList'
import AddTaskForm from './components/AddTaskForm'
import Message from './components/Message'

import { loadTasks, saveTasks } from './api'

export class ToDo extends React.Component {
  state = {
    newTaskText: '',
    isLoading: true,
    hasError: false,
    tasks: null
  }

  async componentDidMount () {
    try {
      const tasks = await loadTasks()
      this.setState(() => ({
        tasks: tasks,
        hasError: false
      }))
    } catch (error) {
      this.setState(() => ({
        hasError: true
      }))
    } finally {
      this.setState(() => ({
        isLoading: false
      }))
    }
  }

  onNewTaskTextChange = (e) => {
    this.setState(() => ({
      newTaskText: e.target.value
    }))
  }

  addNewTask = (e) => {
    e.preventDefault()

    if (!this.state.newTaskText) return

    const newTask = {
      id: String(Date.now()),
      text: this.state.newTaskText,
      isCompleted: false
    }
    this.setState(
      (prevState) => ({
        newTaskText: '',
        tasks: prevState.tasks.concat(newTask)
      }),
      () => saveTasks(this.state.tasks)
    )
  }

  toggleTask = (taskId) => {
    this.setState(
      (prevState) => ({
        tasks: prevState.tasks.map((task) => {
          if (task.id !== taskId) return task
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        })
      }),
      () => saveTasks(this.state.tasks)
    )
  }

  deleteTask = (taskId) => {
    this.setState(
      (prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== taskId)
      }),
      () => saveTasks(this.state.tasks)
    )
  }

  render () {
    const { hasError, isLoading, tasks, newTaskText } = this.state

    return (
      <div>
        <AddTaskForm
          newTaskText={newTaskText}
          addNewTask={this.addNewTask}
          onNewTaskTextChange={this.onNewTaskTextChange}
        >
        </AddTaskForm>
        {
          hasError ?
            <Message>
              Error!
            </Message>
            :
            isLoading ?
              <Message>
                Loading...
              </Message>
              :
                !tasks ?
                  <Message>
                    No data!
                  </Message>
                  :
                  tasks.length === 0 ?
                    <Message>
                      Tasks are empty
                    </Message>
                    :
                    <TasksList
                      tasks={tasks}
                      toggleTask={this.toggleTask}
                      deleteTask={this.deleteTask}
                    />
        }
      </div>
    )
  }
}

export default ToDo
