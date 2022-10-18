// Navbar component 
import { useState } from "react";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1> navbar </h1>
            <div className="links">
                <a href = "/"> Home</a>
                <a href = "/add-video"> About us</a>
                <a href = "/favorite"> Favorite</a>
            </div>
        </nav>
     );
}
 
export default Navbar;