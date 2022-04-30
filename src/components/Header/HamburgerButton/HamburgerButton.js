import React, { useState } from 'react';

export default function HamburgerButton({ setNavActive }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setNavActive(!active);
  };

  return (
    <button
      className={active ? 'hamburger hamburger-active' : 'hamburger'}
      onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}
