import React, { Component } from "react";
import { connect } from "react-redux";

import { Scrollbars } from "react-custom-scrollbars";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import IconButton from "material-ui/IconButton";
import { logoutUserFromFirebase } from "../../store/actions";

class Settings extends Component {
  onLogout = () => {
    this.props.logoutUserFromFirebase();
  };

  render() {
    return (
      <UncontrolledDropdown nav className="list-inline-item cart-icon">
        <DropdownToggle nav className="p-0">
          <IconButton aria-label="bag">
            <i className="fa fa-cog" />
            {/* <Badge color="success" className="badge-xs badge-top-right">3</Badge> */}
          </IconButton>
        </DropdownToggle>
        <DropdownMenu right>
          <div className="dropdown-head d-flex justify-content-between">
            <span>Settings</span>
          </div>
          <Scrollbars
            className="rct-scroll"
            autoHeight
            autoHeightMin={100}
            autoHeightMax={280}
            autoHide
          >
            <ul className="list-unstyled dropdown-body">
              <li className="d-flex justify-content-between">
                <Link
                  to={{
                    pathname: "/app/userProfile",
                    state: { activeTab: 0 }
                  }}
                >
                  <span />
                  <i className="ti ti-user" style={{ marginRight: 20 }} />
                  My Profile
                </Link>
              </li>
            </ul>
          </Scrollbars>
          <div className="dropdown-foot d-flex justify-content-between align-items-center">
            <div>
              <Button
                variant="raised"
                color="secondary"
                className="mr-10 mb-10 btn-xs text-white"
                onClick={this.onLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};
export default connect(mapStateToProps, {
  logoutUserFromFirebase
})(Settings);
