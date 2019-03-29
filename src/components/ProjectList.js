import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import '../styles/css/ProjectList.css';
import Card from './Card';
import Project from './Project';

const propTypes = {
  intl: intlShape.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ProjectList({ intl, projects }) {
  const l = projects.length;

  return (
    <Card className="project-list">
      {projects.map((project, index) => (
        <Project
          key={project.id}
          imageURL={project.imageURL}
          title={intl.formatMessage({ id: `project.${project.id}.title` })}
          description={intl.formatMessage({ id: `project.${project.id}.description` })}
          url={intl.formatMessage({ id: `project.${project.id}.url` }) === 'Not Available' ? null : intl.formatMessage({ id: `project.${project.id}.url` })}
          githubURL={project.githubURL}
          lastRow={l % 2 === 0 ? index === l - 1 || index === l - 2 : index === l - 1}
        />
      ))}
    </Card>
  );
}

ProjectList.propTypes = propTypes;

export default injectIntl(ProjectList);
