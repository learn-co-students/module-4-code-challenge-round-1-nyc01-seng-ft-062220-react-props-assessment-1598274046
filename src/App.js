import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
    return (
      <>
      <Header header="Header by Matt!"/>
      <NotesContainer />
      </>
    )
  }
}

export default App;

//If header props content were not a string I'd need to use {}