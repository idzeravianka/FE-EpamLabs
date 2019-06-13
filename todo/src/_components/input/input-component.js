import React from 'react';
import './input-component.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskName: '', description: '' };
    }

    inputChange = (event) => {
        this.setState({ taskName: event.target.value });
    }

    descriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    addNewTask = () => {
        this.props.addNewTask(this.state.taskName, this.state.description); 
        this.setState({ taskName: '', description: '' });
    }

    render() {
        return (
            <div className="input-component">
                <div>
                    <input className="input-component__input" type='text' value={this.state.taskName} onChange={this.inputChange} placeholder="Task name..." />
                    <textarea className="input-component__description" value={this.state.description} onChange={this.descriptionChange} placeholder="Task description..."></textarea>
                </div>
                <button className="input-component__btn" onClick={this.addNewTask}>Add Task</button>
            </div>
        )
    }
}

export default InputComponent;