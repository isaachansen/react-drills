import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={`https://i.imgur.com/tjj4qt8.jpg`}/>
      </div>
    );
  }
}

export default App;
