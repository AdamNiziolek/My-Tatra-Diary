import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import Navigation from './Navigation/Navigation';

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header-logo">
          <i className="fas fa-book-open logo-icon" />
          <h2 className="logo-text">My Tatra Diary</h2>
        </Link>
        <HamburgerButton setNavActive={setNavActive} />
        <Navigation active={navActive} />
      </div>
    </header>
  );
}
