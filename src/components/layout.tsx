import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/App.css";

function Layout() {
    return (
    <>
        <div className="dex-top">
            <h1>Pokemon Type Matchup</h1>
            <nav>
                <Link className="button" to="/atk">ATK</Link>
                <span>  |  </span>
                <Link className="button" to="/def">DEF</Link>
            </nav>
            <Outlet />
        </div>
    </>
    )
}

export default Layout;