import React from 'react';

import data from '../project-data';
import Section from '../components/Section';

function Home() {
  return (
    data.map(section => (
      <Section key={section.id} id={section.id} projects={section.projects} />
    ))
  );
}

export default Home;
