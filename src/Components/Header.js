import React from "react";

class Header extends React.Component {
  render() {
    return <h1 key="header">
      {
        this.props.string
      }
    </h1>;
  }
}

export default Header;
