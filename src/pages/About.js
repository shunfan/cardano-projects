import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../styles/css/About.css';

const email = 'contact@cardanoprojects.com';
const donationAddress = 'DdzFFzCqrht7cm4ggJqZvxp7x4AGkQjDYsPegQthntjDsTsu5YVZ' +
  'xESW5W4ZGh6rhZmj5vFkJcpogTLDZKTJeUNRa9qvQuwyfS86EeBn';

function About() {
  return (
    <div className="about">
      <p>
        <FormattedMessage id="about.detail" />
      </p>
      <p>
        <FormattedMessage id="about.feedback">
          {feedback => (
            <React.Fragment>
              {feedback}
              <FormattedMessage id="about.contact">
                {contact => (
                  <a href={`mailto:${email}`}>
                    {contact}
                  </a>
                )}
              </FormattedMessage>
              .
            </React.Fragment>
          )}
        </FormattedMessage>
      </p>
      <p>
        <FormattedMessage id="about.donation" />
      </p>
      <pre>
        <code className="about-donation-address">
          {donationAddress}
        </code>
      </pre>
    </div>
  );
}

export default About;
