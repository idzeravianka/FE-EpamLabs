import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './_component/login/login-component';
import Chat from './_component/chat/chat';
import fakeAuth from './_services/authorization-service';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Chat} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;