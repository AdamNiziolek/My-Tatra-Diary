import React, { useState } from 'react';
import classNames from 'classnames';

export default function HamburgerButton({ setNavActive }) {
  const [active, setActive] = useState(false);
  const className = classNames({
    hamburger: true,
    'hamburger-active': active,
  });

  const handleClick = () => {
    setActive(!active);
    setNavActive(!active);
  };

  return (
    <button className={className} onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}
