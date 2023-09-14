import '../views/Nav.scss';
import {NavLink} from 'react-router-dom'

function Nav()
{
    return(
        <div className="topnav">
            <NavLink activeclassname="active" to="/home">Home</NavLink>
            <NavLink activeclassname="active" to="/news">News</NavLink>
            <NavLink activeclassname="active" to="/contact">Contact</NavLink>
            <NavLink activeclassname="active" to="/about">About</NavLink>
        </div>
    );
}

export default Nav;