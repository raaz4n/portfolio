import { useState } from 'react'
import myPhoto from './assets/small.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(`count is ${count}`)
  return (
    <>
      <div class="tl">
        <p>Title</p>
      </div>
      <div>
        <img className = "photo" src = {myPhoto} alt = "small cat can't press any keys on the keyboard"/>
      </div>
    </>
  )
}

export default App
