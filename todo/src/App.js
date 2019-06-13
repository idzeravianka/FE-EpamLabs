import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ToDoContainer from './_components/todo-container/todo-container';
import TaskDescription from './_components/task-description/description-component';

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ToDoContainer}/>
        <Route path='/description/:id' component={TaskDescription}/>
      </Switch>
    </Router>
  );
}

export default App;