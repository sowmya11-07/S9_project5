import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"


function About() {
    const location = useLocation();
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
                <br></br></div>
                <h1>This is the about page u know!!!!</h1> 
                <p>I'm belongs to ---{location.state?.course}</p>
           
        </>
    )
}

export default About