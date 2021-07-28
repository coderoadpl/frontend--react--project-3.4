export const loadTasks = async () => {
  const result = await fetch('https://coderoad--sandbox-react-default-rtdb.europe-west1.firebasedatabase.app/tasks/.json')
  const data = await result.json()
  return data
}

export default loadTasks
