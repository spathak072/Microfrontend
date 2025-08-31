import React, { FC } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';


const App: FC<{
  history: History;
}> = ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>

          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
