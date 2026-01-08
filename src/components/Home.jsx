import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"

function Home() {
     const location = useLocation();
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <br></br>
                <h1>This is home page</h1>
            </div>
             <p>I'm belongs to ---{location.state?.course}</p>
        </>
    )
}

export default Home