import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <Link to="/" className="navbutton" id="logo">IM-NOT-DB</Link>
            <div id="navbar-right">
                <Link className="navbutton" activeClassName="is-active" to="/actors" exact>Actors</Link>
                <Link className="navbutton" activeClassName="is-active" to="/films" exact>Films</Link>
                <Link className="navbutton" activeClassName="is-active" to="/categories" exact>Categories</Link>
                <Link className="navbutton" activeClassName="is-active" to="/watchlist" exact>Watchlist</Link>
            </div>
        </div>
    )
}

export default Navbar;