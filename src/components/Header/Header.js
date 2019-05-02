/**
 * App Header
 */
/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from "material-ui/IconButton";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import screenfull from "screenfull";
import MenuIcon from "material-ui-icons/Menu";
import $ from "jquery";

// actions
import { collapsedSidebarAction } from "../../store/actions";

import Settings from "./Settings";

class Header extends Component {
  state = {
    customizer: false,
    isMobileSearchFormVisible: false
  };

  // function to change the state of collapsed sidebar
  onToggleNavCollapsed = event => {
    const val = !this.props.navCollapsed;
    this.props.collapsedSidebarAction(val);
  };

  render() {
    return (
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100">
          <ul className="list-inline mb-0 navbar-left">
            {!this.props.horizontalMenu ? (
              <li
                className="list-inline-item"
                onClick={e => this.onToggleNavCollapsed(e)}
              >
                <IconButton
                  color="inherit"
                  mini="true"
                  aria-label="Menu"
                  className="humburger"
                >
                  <MenuIcon />
                </IconButton>
              </li>
            ) : (
              <li className="list-inline-item">
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  className="humburger"
                  component={Link}
                  to="/"
                >
                  <i className="ti-layout-sidebar-left" />
                </IconButton>
              </li>
            )}
          </ul>
          <ul className="navbar-right list-inline">
            <Settings />
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default connect(mapStateToProps, {
  collapsedSidebarAction
})(Header);
