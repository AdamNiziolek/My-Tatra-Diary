import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

// classNames

export default function Navigation({ active }) {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className={active ? 'header-nav header-nav-active' : 'header-nav'}>
      <ul className="header-nav-list">
        <li>
          <Link to="/" className="link">
            My entries
          </Link>
        </li>
        <li>
          <Link to="/add" className="link">
            Add a new entry
          </Link>
        </li>
        <li>
          <Link to="/statistics" className="link">
            Statistics
          </Link>
        </li>
        <li>
          <div className="link" onClick={handleLogout}>
            Log out
            <i className="log-out-icon" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
