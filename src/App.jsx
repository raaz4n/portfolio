import { useState } from 'react'
import myPhoto from './assets/small.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(`count is ${count}`)
  return (
    <div>
      <img src = {myPhoto} alt = "small cat can't press any keys on the keyboard"/>
    </div>
  )
}

export default App
