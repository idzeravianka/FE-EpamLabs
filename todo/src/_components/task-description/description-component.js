import React from 'react';
import * as saveDataService from '../../_services/saveData-service';
import './description-component.css';

class TaskDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          tasks: saveDataService.getData()
        };
      }

    render() {
        let task = this.state.tasks.find(task => (Number(task.id) === Number(this.props.match.params.id)));
        return (
            <div className="description-component">
                <h3 className="description-component__task-name">
                    {task.task}
                </h3>
                <div className="description-component__task-description">
                    <p>
                        {task.description}
                    </p>
                    <span className="description-component__date">
                        {new Date(task.date).toLocaleString()}
                    </span>
                </div>
            </div>
        );
    }
}

export default TaskDescription;