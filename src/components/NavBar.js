import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { NavLink } from 'react-router-dom';

import '../styles/css/NavBar.css';
import routes from '../routes';

const propTypes = {
  intl: intlShape.isRequired,
};

function NavBar({ intl }) {
  const intlRoute = routes[intl.locale];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {Object.keys(intlRoute.pages).map(page => (
          <li key={`${intlRoute.path}${intlRoute.pages[page].path}`} className="navbar-item">
            <NavLink exact to={`${intlRoute.path}${intlRoute.pages[page].path}`} className="navbar-item-link" activeClassName="navbar-item-link-selected">{intlRoute.pages[page].name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = propTypes;

export default injectIntl(NavBar);
