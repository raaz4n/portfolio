import myPhoto from '../assets/small.jpg'

export function Home() {
    return(
        <>
            <div className = "card">
                <h1 style = {{color: "#27F549"}}>Website is a work in progress!</h1>
            </div>
            <div>
                <img className = "photo" src = {myPhoto} alt = "small cat can't press any keys on the keyboard"/>
            </div>
        </>
    )
}