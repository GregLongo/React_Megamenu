import React, { Component } from "react";
import view1 from "../img/view1.jpg";
import "../css/Content.css";

class Page1 extends Component {
  render() {
    return (
      <div className="main-content view-1">
        <img src={view1} alt="logo" />
      </div>
    );
  }
}

export default Page1;
