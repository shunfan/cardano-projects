import React from 'react';

import '../styles/css/Header.css';
import Brand from './Brand';
import LanguagePicker from './LanguagePicker';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="header">
      <Brand />
      <LanguagePicker />
      <NavBar />
    </header>
  );
}

export default Header;
