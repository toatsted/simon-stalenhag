import React, { Component } from 'react';
import './Index.css';

export default class Index extends Component {
  render() {
    return (
      <div className="index">
        { this.props.children }
      </div>
    )
  }
}
