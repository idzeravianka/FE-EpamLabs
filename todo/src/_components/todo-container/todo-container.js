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

  addNewTask(task) {
    let tmpState = this.state.tasks;
    
    tmpState.push({id: this.state.tasks.length, task: task});
    this.setState({ tasks: tmpState });

    saveData.saveData(tmpState);
  }

  removeTask(id) {
    let tmpState = this.state.tasks.filter(task => task.id !== id);
    tmpState.map((task) => (task.id > id) ? task.id-- : task.id);

    this.setState({ tasks: tmpState });
    
    saveData.saveData(tmpState);
  }

  render() {
    return (
      <div>
        <InputComponent addNewTask={(e) => this.addNewTask(e)} />
        <TableComponent tasks={this.state.tasks} removeTask={(e) => this.removeTask(e)} />
      </div>
    );
  }
}

export default ToDoContainer;
