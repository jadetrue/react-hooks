// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  let [name, setName] = React.useState(initialName)

  function handleChange(event) {
    event.preventDefault()
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
  return <Greeting initialName="Jade" />
}

export default App
