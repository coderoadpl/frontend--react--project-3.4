import React from 'react'

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

  addNewTask = () => {
    console.log(this.state.newTaskText)
  }

  render () {
    const { tasks, newTaskText } = this.state

    return (
      <div>
        <input
          type={'text'}
          value={newTaskText}
          onChange={this.onNewTaskTextChange}
        />
        <br/>
        <button
          onClick={this.addNewTask}
        >
          SUBMIT
        </button>
        <ul>
          {
            tasks.map(({ id, text }) => {
              return (
                <li key={id}>
                  {text}
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
