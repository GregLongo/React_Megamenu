import React, { Component } from "react";
import "../css/Content.css";

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="intro">
          <img alt="logo" className="g-logo" />
          <h1> Mega Menu in React</h1>
          <h2> Hover Header Logo to Open</h2>
        </div>
      </div>
    );
  }
}

export default Content;
