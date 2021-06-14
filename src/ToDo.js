import React from 'react'

export class ToDo extends React.Component {
    state = {
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

    render () {
      const { tasks } = this.state

      return (
        <div>
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
