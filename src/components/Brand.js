import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';

import '../styles/css/Brand.css';
import logo from '../images/cardano-projects.svg';
import routes from '../routes';

const propTypes = {
  intl: intlShape.isRequired,
};

function Brand({ intl }) {
  return (
    <Link className="brand" to={routes[intl.locale].path}>
      <img className="brand-logo" src={logo} alt="Cardano Logo" />
      <h1 className="brand-title">Cardano Projects</h1>
    </Link>
  );
}

Brand.propTypes = propTypes;

export default injectIntl(Brand);
