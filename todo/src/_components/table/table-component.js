import React from 'react';
import TableTasks from './table-component__tasks';
import './table-component.css';

class TableComponent extends React.Component {
    render() {
        return (
            <table className="table-component">
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Task</td>
                    </tr>
                    <TableTasks tasks={this.props.tasks} removeTask={this.props.removeTask}/>
                </tbody>
            </table>
        );
    }
}

export default TableComponent;