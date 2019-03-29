import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/css/Project.css';
import ResourceButton from './ResourceButton';

const propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  githubURL: PropTypes.string,
  lastRow: PropTypes.bool.isRequired,
};

const defaultProps = {
  imageURL: null,
  url: null,
  githubURL: null,
};

function Project({
  imageURL, title, description, url, githubURL, lastRow,
}) {
  return (
    <div className={`project${lastRow ? ' project-last' : ''}`}>
      <a className="project-link" href={url} target="_blank" rel="noopener">
        <div className={`project-header${githubURL ? ' project-header-narrow' : ''}`}>
          {imageURL && <img src={imageURL} alt={title} />}
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="project-content">
          <p className="project-description">{description}</p>
        </div>
      </a>
      <div className="project-actions">
        {githubURL && <ResourceButton
          icon={<FontAwesomeIcon icon={faGithubAlt} />}
          name="GitHub"
          url={githubURL}
        />}
      </div>
    </div>
  );
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
