import React from 'react';
import './App.css';
import TableComponent from './_components/table/table-component';
import InputComponent from './_components/input/input-component';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks"))//[]
    };
  }

  addNewTask(task) {
    this.state.tasks.push({id: this.state.tasks.length, task: task});
    this.setState({ tasks: this.state.tasks });

    localStorage.setItem("tasks", JSON.stringify(this.state.tasks, ["id", "task"]));
  }

  removeTask(id) {
    this.state.tasks = this.state.tasks.filter(task => task.id != id);
    this.state.tasks.map((task) => (task.id > id) ? task.id-- : task.id);
    this.setState({ tasks: this.state.tasks });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks, ["id", "task"]));
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

export default App;
