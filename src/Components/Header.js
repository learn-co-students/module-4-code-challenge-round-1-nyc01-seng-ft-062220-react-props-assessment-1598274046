import React from "react";

const header = "Hello React!"

class Header extends React.Component {
  render() {
    return <h1>{this.props.header}</h1>;
  }
}


export default Header;
