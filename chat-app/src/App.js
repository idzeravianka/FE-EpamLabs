import React from 'react';
import { connect } from 'react-redux';
import * as Firebase from 'firebase/app';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Chat from './_component/chat/chat';
import Login from './_component/login/login-component';
import Header from './_component/header/header-component';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return <Route {...rest} render={(props) => (
    auth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { auth: false };
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((authenticated) => {
      if (authenticated){
        this.setState({ auth: true });
        if(authenticated.displayName){
          this.props.onSetUserName(authenticated.displayName);
        }
      } else {
        this.setState({ auth: false });
      }
    });
  }

  signOut = () => {
    Firebase.auth().signOut().then(()=>{
      setTimeout(()=>{
        this.props.onUserLogOut();
      }, 0)
    });
  }

  render() {
    if (this.state.auth) {
      return (
        <Router>
          <Header auth={this.state.auth} signOut={this.signOut}/>
          <PrivateRoute exact path='/' component={Chat} auth={this.state.auth} />
          <Redirect to='/' />
        </Router>
      )
    }
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Chat} auth={this.state.auth} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onUserLogOut: () => {
      dispatch({ type: 'USER_LOGOUT', payload: "undefined" })
    },

    onSetUserName: (username) => {
      dispatch({ type: 'SET_USERNAME', payload: username });
    }
  })
)(App);