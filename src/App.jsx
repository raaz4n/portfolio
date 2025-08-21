import { useState } from 'react'
import myPhoto from './assets/small.jpg'
import astromp4 from './assets/astro.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(`count is ${count}`)
  return (
    <>
      <div className = "header">
        <div className = "google-sans tl">
          <video autoPlay loop muted playsInline className = "tlgif">
            <source src = {astromp4} type="video/mp4"/>
          </video>
          <p>/raaz4n</p>
        </div>
        <div className = "sections">
          <a href="">about</a>
          <a href="">contact</a>
          <a href="">projects</a>
        </div>
      </div>
      <div>
        <img className = "photo" src = {myPhoto} alt = "small cat can't press any keys on the keyboard"/>
      </div>
    </>
  )
}

export default App
