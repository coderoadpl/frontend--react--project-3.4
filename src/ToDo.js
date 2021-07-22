import React from 'react'

import Button from './components/Button'
import TextField from './components/TextField'

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
      id: Date.now(),
      text: this.state.newTaskText,
      isCompleted: false
    }
    this.setState((prevState) => ({
      newTaskText: '',
      tasks: prevState.tasks.concat(newTask)
    }))
  }

  toggleTask = (taskId) => {
    console.log('toggleTask')
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

  makeToggleTaskHandler = (taskId) => (e) => {
    this.toggleTask(taskId)
  }

  deleteTask = (taskId) => {
    console.log('deleteTask')
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
        <ul>
          {
            tasks.map(({ id, text, isCompleted }) => {
              return (
                <li
                  key={id}
                  onClick={this.makeToggleTaskHandler(id)}
                >
                  {isCompleted ? '[COMPLETED]' : ''}
                  {text}
                  <Button
                    onClick={(e) => this.deleteTask(id)}
                  >
                    DELETE
                  </Button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ToDo
