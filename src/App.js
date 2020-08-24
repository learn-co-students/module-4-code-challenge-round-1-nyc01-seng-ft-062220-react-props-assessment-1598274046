import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
    return (
    <div>
      <Header blah="I feel like I'm back in 'Nam in 59" />
      <NotesContainer />
    </div>
    )}
}

export default App;
