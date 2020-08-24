import React from "react";
import NotesContainer from "./NotesContainer"

class Header extends React.Component {
  
  render() {


    const list = ["First Note", "Second Note", "Third Note", "Fourth Note"]
  
    return (<div>
      <h1>{"My Notes:"}</h1>
      <NotesContainer note_list={list}/>
      </div>)
           ;
  }
}

export default Header;
