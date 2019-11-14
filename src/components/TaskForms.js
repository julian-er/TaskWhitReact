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

        <div className="col-md-3">
            <div className="card mt-4">
            <form onSubmit={this.handleSubmit}>
            <div className="card-header">
                <label for="responsible">Encargado</label>
                <input type="text" className="form-control" id="responsible" placeholder="Ingrese nombre" onChange={this.handleInput}/>
                <small id="responsibleHelp" className="form-text text-muted">Necesitamos saber quien, va a realizar la tarea </small>
            </div>
            <div className="card-body">
                <label for="description">Tarea que va a realizar</label>
                <input type="text" className="form-control" id="description" placeholder="Tarea a realizar" onChange={this.handleInput}/>
                <label for="priority">Prioridad</label>
                <input type="text" className="form-control" id="priority" placeholder="prioridad de la tarea" onChange={this.handleInput}/>
            </div>
            <footer className="card-footer">
                <button type="submit" className="btn btn-primary">Añadir Tarea</button>
            </footer>
            </form>
            </div>
            </div>
        )
    }
}

export default TaskForms;