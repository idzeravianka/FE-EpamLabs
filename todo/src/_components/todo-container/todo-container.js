import React from 'react';
import TableComponent from '../table/table-component';
import InputComponent from '../input/input-component';
import * as saveData from '../../_services/saveData-service';

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: saveData.getData()
    };
  }

  addNewTask = (taskName, description) => {
    let tmpState = Object.assign([], this.state.tasks);

    let currenTime = new Date().toUTCString();
    let nextId = tmpState.length;
    
    tmpState.push({id: nextId, task: taskName, description: description, date: currenTime });
    this.setState({ tasks: tmpState });
    
    saveData.saveData(tmpState);
  }

  removeTask = (id) => {
    let tmpState = this.state.tasks.filter(task => task.id !== id);
    tmpState.map((task) => (task.id > id) ? task.id-- : task.id);

    this.setState({ tasks: tmpState });
    
    saveData.saveData(tmpState);
  }

  render() {
    return (
      <div>
        <InputComponent addNewTask={this.addNewTask} />
        <TableComponent tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default ToDoContainer;
