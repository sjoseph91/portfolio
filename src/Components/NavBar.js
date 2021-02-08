import React from 'react'
import avatar from '../img/avatar.jpg';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to="/" exact activeClassName="active">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" exact activeClassName="active">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" exact activeClassName="active">
                            Projects
                        </Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to="/contact" exact activeClassName="active">
                            Contact
                        </Link>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                    
                    </p>
                </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
