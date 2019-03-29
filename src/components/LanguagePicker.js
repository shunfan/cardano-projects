import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/LanguagePicker.css';

function LanguagePicker() {
  return (
    <div className="language-picker">
      <Link className="language-option" to="/">
        <div className="country-flag country-flag-usa" />
        English
      </Link>
      <Link className="language-option" to="/cn/">
        <div className="country-flag country-flag-china" />
        中文
      </Link>
    </div>
  );
}

export default LanguagePicker;
