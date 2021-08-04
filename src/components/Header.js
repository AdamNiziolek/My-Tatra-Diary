import React, {useState} from "react";
import HamburgerButton from "./HamburgerButton";
import Navigation from "./Navigation";

export default function Header() {
    const [navActive, setNavActive] = useState(false);
    return (
        <header className="App-header">
            <div className="container">
                <div className="header-logo">
                    <i className="fas fa-book-open logo-icon"/>
                    <h2 className="logo-text">My Tatra Diary</h2>
                </div>
                <HamburgerButton setNavActive={setNavActive}/>
                <Navigation active={navActive}/>
            </div>
        </header>
    );
}
