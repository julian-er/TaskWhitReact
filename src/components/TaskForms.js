import React, { Component } from 'react';

class TaskForms extends Component {
    constructor(){
    super();
    this.state = {
      responsible: '',
      description: '',
      priority: ''
    };
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}

    handleInput(e){
        const {value, id} = e.target;
        this.setState({
            [id]:value
        })
        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        console.log('enviado')
    }

    render () {
        return (
            <div className="col-md-12">
            <div className="card mt-4">
                <form onSubmit={this.handleSubmit}>        
                        <div className="card-header">
                            <div className="text-align-center">
                            <h4 className="mb-0">New tasks to do</h4>
                            </div>
                        </div>
                        <div className="card-body">
                        <div className="form-group text-align-left">
                            <input type="text" className="form-control" id="responsible" placeholder="Name" onChange={this.handleInput}/>
                            <small id="responsibleHelp" className="form-text text-muted">Please, tell us who is in charge of this task </small>
                        </div>
                        <div className="form-group text-align-left">
                            <input type="text" className="form-control" id="title" placeholder="Title of task" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" id="description" rows="3" placeholder="Describe task" onChange={this.handleInput}></textarea>
                        </div>
                        <div className="form-group text-align-left">
                        <select className="custom-select custom-select-md mb-3" id="priority" onChange={this.handleInput}>
                            <option selected>Select the priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        </div>
                        </div>
                        <footer className="card-footer">
                            <button type="submit" className="btn btn-primary">Add task</button>
                        </footer>
                </form>
            </div>
            </div>


        )
    }
}

export default TaskForms;