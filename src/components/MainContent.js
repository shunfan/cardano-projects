import PropTypes from 'prop-types';
import React from 'react';

import '../styles/css/MainContent.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

function MainContent(props) {
  return (
    <div className="main-content-container">
      {props.children}
    </div>
  );
}

MainContent.propTypes = propTypes;

export default MainContent;
