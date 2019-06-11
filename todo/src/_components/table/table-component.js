import React from 'react';
import './table-component.css';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table-component">
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Task</td>
                    </tr>
                    {this.props.tasks.map(task =>
                        <tr key={task.id}>
                            <td className="table-component__id">{task.id}</td>
                            <td className="table-component__task">{task.task}</td>
                            <td className="table-component__remove-btn" onClick={() => this.props.removeTask(task.id)}>
                                <button>
                                    &#x2716;
                                </button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        );
    }
}

export default TableComponent;