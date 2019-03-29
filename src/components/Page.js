import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogPath: PropTypes.string.isRequired,
};

function Page({
  children, lang, title, description, ogTitle, ogPath,
}) {
  document.getElementsByTagName('html')[0].setAttribute('lang', lang);
  document.title = title;
  const metaElements = document.getElementsByTagName('META');
  for (let i = 0; i < metaElements.length; i += 1) {
    if (metaElements[i].getAttribute('name') === 'description') {
      metaElements[i].setAttribute('content', description);
    }

    if (metaElements[i].getAttribute('property') === 'og:title') {
      metaElements[i].setAttribute('content', ogTitle);
    }

    if (metaElements[i].getAttribute('property') === 'og:url') {
      metaElements[i].setAttribute('content', `https://cardanoprojects.com${ogPath}`);
    }
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

Page.propTypes = propTypes;

export default Page;
