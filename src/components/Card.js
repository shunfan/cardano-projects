import PropTypes from 'prop-types';
import React from 'react';

import '../styles/css/Card.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

function Card({ children, className }) {
  return (
    <div className={`card${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
