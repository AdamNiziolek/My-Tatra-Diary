import React from "react";
import {Link} from "react-router-dom";
//classNames
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
                <li>
                    <div className="link">Log out
                        <i className="log-out-icon"/>
                    </div>                    
                </li>
            </ul>
        </nav>
    );
}
