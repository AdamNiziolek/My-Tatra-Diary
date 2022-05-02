import React from 'react';
import link from './util';

export default function Footer() {
  return (
    <footer className="footer">
      Created by{' '}
      <a className="footer__link" href={link} target="_blank" rel="noreferrer">
        Adam Niziołek
      </a>
    </footer>
  );
}
