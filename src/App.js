import React, { Component } from "react";
import Header from './Components/Header.js';
import "./App.css";
import NotesContainer from "./Components/NotesContainer.js";


class App extends Component {

  render() {
    return (
      <>
        <Header header={'hello'} />
        <NotesContainer />
      </>
    );
  }
}

export default App;
