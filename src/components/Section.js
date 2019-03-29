import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../styles/css/Section.css';
import ProjectList from './ProjectList';

const propTypes = {
  id: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Section({ id, projects }) {
  return (
    <section className="section">
      <h2 className="section-title">
        <FormattedMessage id={`project-list.${id}.title`} />
      </h2>
      <ProjectList projects={projects} />
    </section>
  );
}

Section.propTypes = propTypes;

export default Section;
