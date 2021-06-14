import React from 'react'

export class ToDo extends React.Component {
    state = {
      tasks: [
        {
          text: 'Wynieś śmieci',
          isCompleted: false
        },
        {
          text: 'Zmyj naczynia',
          isCompleted: false
        }
      ]
    }

    render () {
      return (
        <div>
          ToDo
        </div>
      )
    }
}

export default ToDo
