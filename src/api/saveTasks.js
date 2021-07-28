export const saveTasks = async (tasks) => {
  const result = await fetch(
    'https://coderoad--sandbox-react-default-rtdb.europe-west1.firebasedatabase.app/tasks/.json',
    {
      method: 'PUT',
      body: JSON.stringify(tasks)
    }
  )

  const data = await result.json()
  return data
}

export default saveTasks
