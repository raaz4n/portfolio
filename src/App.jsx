import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(`count is ${count}`)
  return (
    <div>
      <p>hi</p>
    </div>
  )
}

export default App
