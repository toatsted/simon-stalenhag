import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        { this.props.children }
      </div>
    )
  }
}
