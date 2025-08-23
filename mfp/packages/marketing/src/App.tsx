import React, { FC } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { MemoryHistory } from 'history';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
const App: FC<{
  history: MemoryHistory<unknown>;
}> = ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/pricing"
              component={Pricing}
            />
            <Route
              path="/"
              component={Landing}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
