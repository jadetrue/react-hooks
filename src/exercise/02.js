// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorage(initialName) {
  console.log('rendering greeting')
  const [name, setName] = React.useState(
    window.localStorage.getItem('name') || initialName,
  )

  React.useEffect(() => {
    window.localStorage.getItem('name', name)
  }, [name])

  return [name, setName]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorage(initialName)
  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
