import React, { FC } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";


const App: FC<{
  history: History;
}> = ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route  path="/auth/signin" component={SignIn} />
              <Route  path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
