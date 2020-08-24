import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'

class App extends Component {
  render() {
  
    return <Header header={this.note_list}/>
  }
}

export default App;
