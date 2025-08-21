import myPhoto from './assets/small.jpg'
import astromp4 from './assets/astro.mp4'
import './App.css'

function App() {
  return (
    <>
      <header className = "header">
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
      </header>
      <div className = "card">
        <h1 style = {{color: "#27F549"}}>Website is a work in progress!</h1>
      </div>
      <div>
        <img className = "photo" src = {myPhoto} alt = "small cat can't press any keys on the keyboard"/>
      </div>
    </>
  )
}

export default App
