// Navbar component 
import { useState } from "react";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1> navbar </h1>
            <div className="links">
                <a href = "/"> Home</a>
                <a href = "/about-us"> About us</a>
            </div>
        </nav>
     );
}
 
export default Navbar;