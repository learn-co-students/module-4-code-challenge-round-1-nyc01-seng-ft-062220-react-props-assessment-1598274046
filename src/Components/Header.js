import React from "react";

class Header extends React.Component {
  render() {
    return <h1 className="header">Mod4 Reactions is sponsored by {this.props.header}</h1>;
  }
}

export default Header;
