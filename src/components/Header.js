import React, { Component } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import usr from "../img/usr.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: "closed" };
  }

  handleHover() {
    if (this.state.dropdown === "closed") {
      this.setState({ dropdown: "open" });
    }
  }

  handleClose() {
    if (this.state.dropdown === "open") {
      this.setState({ dropdown: "closed" });
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">
            <span
              onMouseEnter={this.handleHover.bind(this)}
              onClick={this.handleClose.bind(this)}
            >
              <img className="logo" alt="logo" />
              <h2>MegaMenu</h2>
            </span>
          </Link>
          <div className="outer-links">
            <img src={usr} alt="usr" className="usr-header" />
          </div>
        </div>

        <Menu
          closeMe={this.handleClose.bind(this)}
          dropdown={this.state.dropdown}
        />
      </div>
    );
  }
}

export default Header;
