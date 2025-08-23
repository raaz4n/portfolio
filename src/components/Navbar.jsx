import astromp4 from '../assets/astro.mp4'
import linkedInLight from '../assets/linkedinlight.svg'
import linkedInDark from '../assets/linkedindark.svg'
import gitHubLight from '../assets/githublight.svg'
import gitHubDark from '../assets/githubdark.svg'
import { Link } from 'react-router-dom'

export function Navbar() {
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
                <Link to="/">
                    <button className = "txtColor">home</button>
                </Link>
                <Link to="/about">
                    <button className = "txtColor">about</button>
                </Link>
                <Link to="/contact">
                    <button className = "txtColor">contact</button>
                </Link>
                <Link to="/projects">
                    <button className = "txtColor">projects</button>
                </Link>
            </div>
        </header>
        </>
    )
}