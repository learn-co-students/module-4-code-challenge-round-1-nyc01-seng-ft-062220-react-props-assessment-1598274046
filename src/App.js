import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NotesContainer from '.NotesContainer'

class App extends Component {
  render() {
    
    return  <div>
                <Header header={"passing this string"}/>
                <NotesContainer content={"This is a comment"}/>
            </div>
      
  }
}

export default App;
