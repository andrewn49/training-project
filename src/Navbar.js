import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <Link to="/" className="navbutton" id="logo">IM-NOT-DB</Link>
            <div id="navbar-right">
                <Link className="navbutton" to="/actors">Actors</Link>
                <Link className="navbutton" to="/films">Films</Link>
                <Link className="navbutton" to="/categories">Categories</Link>
                <Link className="navbutton" to="/watchlist">Watchlist</Link>
            </div>
        </div>
    )
}

export default Navbar;