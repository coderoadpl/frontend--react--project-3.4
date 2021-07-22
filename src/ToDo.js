import React from 'react'

import Button from './components/Button'
import TextField from './components/TextField'
import TasksList from './components/TasksList'

export class ToDo extends React.Component {
  state = {
    newTaskText: '',
    tasks: [
      {
        id: '123',
        text: 'Wynieś śmieci',
        isCompleted: false
      },
      {
        id: '321',
        text: 'Zmyj naczynia',
        isCompleted: false
      }
    ]
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
    this.setState((prevState) => ({
      newTaskText: '',
      tasks: prevState.tasks.concat(newTask)
    }))
  }

  toggleTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id !== taskId) return task
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      })
    }))
  }

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId)
    }))
  }

  render () {
    const { tasks, newTaskText } = this.state

    return (
      <div>
        <form onSubmit={this.addNewTask}>
          <TextField
            type={'text'}
            value={newTaskText}
            onChange={this.onNewTaskTextChange}
          />
          <br/>
          <Button>
            SUBMIT
          </Button>
        </form>
        <TasksList
          tasks={tasks}
          toggleTask={this.toggleTask}
          deleteTask={this.deleteTask}
        />
      </div>
    )
  }
}

export default ToDo
