import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/favicon.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            {/* Logo Section */ }
            <div className="navbar-logo-container">
                <img src={ logo } alt="Logo" className="navbar-logo"/>
                <Link to="/" className="navbar-logo-text">
                    StoryVerse
                </Link>
                <button className="menu-toggle" onClick={ toggleMenu }>
                    ☰
                </button>
            </div>

            {/* Button Section */ }
            <div className={ `navbar-buttons ${ menuOpen ? "open" : "" }` }>

                <Link to="/BookSuggestions" className="navbar-button">
                    Books
                </Link>
                <Link to="/Request" className="navbar-button">
                    Request
                </Link>
                <Link to="/Page2" className="navbar-button">
                    Sign Up / Log In
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
