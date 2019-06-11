import React from 'react';
import './input-component.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="input-component">
                <input className="input-component__input" type='text' value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button className="input-component__btn" onClick={() => { this.props.addNewTask(this.state.value); this.setState({value: ''});}}>Add Task</button>
            </div>
        )
    }
}

export default InputComponent;