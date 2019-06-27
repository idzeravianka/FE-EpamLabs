import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './_component/login/login-component';
import Chat from './_component/chat/chat';
import fakeAuth from './_services/authorization-service';

import Container from '@material-ui/core/Container';

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
      <Container maxWidth="md">
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Chat} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);