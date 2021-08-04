import React from "react";

export default function Navigation({active}) {
    return (
        <nav className={active ? 'header-nav header-nav-active': 'header-nav'}>
            <ul className="header-nav-list">
                <li>My entries</li>
                <li>Add a new entry</li>
                <li>Inspirations</li>
                <li>Log out
                    <i className="log-out-icon"/>
                </li>
            </ul>
        </nav>
    );
}
