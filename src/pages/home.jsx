import myPhoto from '../assets/small.jpg'
import astromp4 from '../assets/astro.mp4'
import linkedInLight from '../assets/linkedinlight.svg'
import linkedInDark from '../assets/linkedindark.svg'
import gitHubLight from '../assets/githublight.svg'
import gitHubDark from '../assets/githubdark.svg'

export function Home() {
    return(
        <>
            <header className = "header">
                    <div className = "google-sans tl">
                      <video autoPlay loop muted playsInline className = "tlgif">
                        <source src = {astromp4} type="video/mp4"/>
                      </video>
                      <p>/raaz4n</p>
                      <div>
                        <a href = "https://www.linkedin.com/in/raazan-doski-701a40257/" target = "_blank" rel = "nofollow norefferer">
                          <img src = {linkedInLight} alt = "LinkedIn logo" className = "logo lightMode"/>
                          <img src = {linkedInDark} alt = "LinkedIn logo" className = "logo darkMode"/>
                        </a>
                        <a href = "https://github.com/raaz4n" target = "_blank" rel = "nofollow noreferrer">
                          <img src = {gitHubLight} alt = "GitHub logo" className = "logo lightMode"/>
                          <img src = {gitHubDark} alt = "GitHub logo" className = "logo darkMode"/>
                        </a>
                      </div>
                    </div>
                    <div className = "sections">
                      <a href="">home</a>
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