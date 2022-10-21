// Navbar component
// Link handle content changes in browser and will not send server quest
import { Link } from "react-router-dom";


const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1> navbar </h1>
            <div className="links">
                <Link to= "/"> Home</Link>
                <Link to= "/add-video"> Add Video</Link>
                <Link to= "/favorite"> Favorite</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;