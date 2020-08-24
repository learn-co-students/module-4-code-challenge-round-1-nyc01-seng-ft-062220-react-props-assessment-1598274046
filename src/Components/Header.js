import React from "react";
import NotesContainer from "./NotesContainer";

class Header extends React.Component {

  notes = () => {
    return this.props.name.map(function(notes){
      return <NotesContainer notes={notes} />
    })
  }


  render() {
    // console.log(this.props.header)
    return <h1>{this.props.header}</h1>;
  }
}

export default Header;
