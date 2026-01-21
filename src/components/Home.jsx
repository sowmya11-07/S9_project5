import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import "../components/styles.css"

function Home() {
    const location = useLocation();
    
    useEffect(() => {
        alert(localStorage.getItem("msg"));      
    }, []);

      const handleBtnclick = () => {       
            localStorage.setItem("msg","");
    };


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
            <p>Message: {location.state?.course}</p>
            <button onClick={handleBtnclick} class="glass-btn">Clear LocalStorage</button>
        </>
    )
}

export default Home