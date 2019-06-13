import React from 'react';
import { Link } from 'react-router-dom';

class TableTasks extends React.Component {

    render() {
        return (
            <React.Fragment>{
                this.props.tasks.map(task =>
                    <tr key={task.id}>
                        <td className="table-component__id">{task.id}</td>
                        <td className="table-component__task"><Link to={`/description/${task.id}`}>{task.task}</Link></td>
                        <td className="table-component__remove-btn" onClick={() => this.props.removeTask(task.id)}>
                            <button>
                                &#x2716;
                            </button>
                        </td>
                    </tr>)
            }</React.Fragment>
        );
    }

}

export default TableTasks;