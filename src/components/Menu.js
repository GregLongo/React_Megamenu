import React, { Component } from "react";
import usr from "../img/usr.png";
import "../css/Menu.css";
import Applink from "../components/Applink";

class Menu extends Component {
  render() {
    return (
      <div className={this.props.dropdown}>
        <div className="menu">
          <div className="menu-body">
            <img alt="logo" className="g-logo" />
            <div className="columns">
              <div className="column col-1">
                <div className="col-head"> Tools</div>
                <div className="col-subhead"> Recent </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#05880A" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#05880A" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#05880A" />
                  </div>
                </div>

                <div className="col-subhead"> Favorite </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#E5C003" />
                  </div>
                </div>

                <div className="col-subhead"> All </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#3AB3E5" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page1" label="Menu Item" rect="#3AB3E5" />
                  </div>
                </div>
              </div>

              <div className="column col-2">
                <div className="col-head"> Platform</div>
                <div className="col-subhead"> Recent </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#00739D" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#00739D" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#00739D" />
                  </div>
                </div>

                <div className="col-subhead"> Favorite </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#AC0C88" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#AC0C88" />
                  </div>
                </div>

                <div className="col-subhead"> All </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#CB6C6C" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page2" label="Menu Item2" rect="#CB6C6C" />
                  </div>
                </div>
              </div>

              <div className="column col-3">
                <div className="col-head">
                  <img src={usr} alt="avatar" className="usr-menu" /> User
                </div>
                <div className="col-subhead"> Recent </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#30A6D1" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#30A6D1" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#30A6D1" />
                  </div>
                </div>

                <div className="col-subhead"> Favorite </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#92B506" />
                  </div>
                </div>

                <div className="col-subhead"> All </div>
                <div className="app-list">
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#7F0EAE" />
                  </div>
                  <div className="app-link" onClick={this.props.closeMe}>
                    <Applink path="/page3" label="Menu Item3" rect="#7F0EAE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
