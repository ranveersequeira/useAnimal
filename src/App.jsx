import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <h1>Animal Search</h1>
        <input type="text"
        placeholder='Search for a Animal'
        onChange={handleChange.bind(this)} />

    </main>
  )
}

export default App
