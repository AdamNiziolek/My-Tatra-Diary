import React from "react";
import {Link} from "react-router-dom";

export default function Navigation({active}) {
    return (
        <nav className={active ? 'header-nav header-nav-active': 'header-nav'}>
            <ul className="header-nav-list">
                <li>
                    <Link to="/" className="link">My entries</Link>
                </li>
                <li>
                    <Link to="/add" className="link">Add a new entry</Link>
                </li>
                <li>
                    <Link to="/statistics" className="link">Statistics</Link>
                </li>
                <li>Log out
                    <i className="log-out-icon"/>
                </li>
            </ul>
        </nav>
    );
}
