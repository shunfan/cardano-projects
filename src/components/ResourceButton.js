import PropTypes from 'prop-types';
import React from 'react';

import '../styles/css/ResourceButton.css';

const propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function ResourceButton({ icon, name, url }) {
  return (
    <a className="resource-button" href={url} target="_blank" rel="noopener">
      <div className="resource-button-icon">{icon}</div>
      <div className="resource-button-name">{name}</div>
    </a>
  );
}

ResourceButton.propTypes = propTypes;

export default ResourceButton;
