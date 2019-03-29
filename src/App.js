import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { Route, Switch } from 'react-router-dom';

import './styles/css/App.css';
import AppRoutes from './AppRoutes';
import messagesEN from './intl/en.json';
import messagesShared from './intl/shared.json';
import messagesZH from './intl/zh.json';
import routes from './routes';

addLocaleData([...en, ...zh]);

const messages = {
  en: Object.assign({}, messagesEN, messagesShared),
  zh: Object.assign({}, messagesZH, messagesShared),
};

function App() {
  return (
    <React.Fragment>
      <Switch>
        {Object.keys(routes).sort((a, b) => routes[b].path.split('/').length - routes[a].path.split('/').length).map(locale => (
          <Route
            key={locale}
            path={routes[locale].path}
            render={() => (
              <IntlProvider locale={locale} messages={messages[locale]}>
                <AppRoutes />
              </IntlProvider>
            )}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
}

export default App;
