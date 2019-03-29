import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MainContent from './components/MainContent';
import routes from './routes';

const propTypes = {
  intl: intlShape.isRequired,
};

function AppRoutes({ intl }) {
  const intlRoutes = routes[intl.locale];

  return (
    <React.Fragment>
      <Header />
      <MainContent>
        <Switch>
          <Route
            exact
            path={`${intlRoutes.path}${intlRoutes.pages.home.path}`}
            render={() => (
              <Page
                lang={intl.locale}
                title={intlRoutes.pages.home.title}
                description={intlRoutes.description}
                ogTitle={intlRoutes.pages.home.ogTitle}
                ogPath={intlRoutes.pages.home.ogPath}
              >
                <Home />
              </Page>
            )}
          />
          <Route
            exact
            path={`${intlRoutes.path}${intlRoutes.pages.about.path}`}
            render={() => (
              <Page
                lang={intl.locale}
                title={intlRoutes.pages.about.title}
                description={intlRoutes.description}
                ogTitle={intlRoutes.pages.about.ogTitle}
                ogPath={intlRoutes.pages.about.ogPath}
              >
                <About />
              </Page>
            )}
          />
          <Redirect to={intlRoutes.path} />
        </Switch>
      </MainContent>
      <Footer />
    </React.Fragment>
  );
}

AppRoutes.propTypes = propTypes;

export default injectIntl(AppRoutes);
