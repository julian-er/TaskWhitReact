import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {tareas} from './task.json';
import TaskForms from './components/TaskForms';
console.log(tareas);

class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    };
    this.handleAddTask = this.handleAddTask.bind(this)

  }

deleteTask(index){
 this.setState({
  tareas: this.state.tareas.filter((e, i) => {
    return i !== index })

 })
  
}

handleAddTask(task){

  this.setState({
    tareas : [...this.state.tareas, task]
  })

}

  render() {
    console.log('antes de renderizar veo esto');
    const task = this.state.tareas.map((tareas, i) => {
      return (
        <div className="col-md-3">
        <div className="card mt-4">
          <div className="card-header">
          <span className="btn btn-danger far fa-times-circle float-right" onClick={this.deleteTask.bind(this, i)}></span> 
            <h4>{tareas.title}</h4>
            <span className="card-subtitle text-muted">{tareas.priority}</span>
          </div>
          <div className="card-body">
              <p>{tareas.description}</p>
          </div>
          <footer className="card-footer">
                {tareas.responsible}
          </footer>
        </div>
        </div>
      )
    });
    document.title = `To do tasks - ${this.state.tareas.length}`;
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <p className="text-white" > Task to do - <span className="badge badge-pill badge-light ml-2">{this.state.tareas.length}</span></p>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container-fluid">
        <div className="row">
          <TaskForms onAddTask={this.handleAddTask}></TaskForms>
          { task }
        </div>
      </div>
    </div>
  );
}
}
export default App;
