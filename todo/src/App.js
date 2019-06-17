import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import ToDoContainer from './_components/todo-container/todo-container';
import TaskDescription from './_components/task-description/description-component';
import Login from './_components/login/login-component';
import fakeAuth from './_services/authorization-service';
import NavMenu from './_components/nav-menu/nav-menu';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

function App(){
  return (
    <Router>
      <NavMenu/>
      <Switch>
        <PrivateRoute exact path='/' component={ToDoContainer}/>
        <PrivateRoute path='/description/:id' component={TaskDescription}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;