import React, { Component } from "react";
import Todo from './Components/Todo';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ""
    }
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleChanger(value) {
    this.setState({input: value});
  }

  handleNewTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });

  }




  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleChanger(e.target.value)}
          />

          <button onClick={this.handleNewTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
