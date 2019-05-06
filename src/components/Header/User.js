import React, { Component } from "react";
import { connect } from "react-redux";

import { Scrollbars } from "react-custom-scrollbars";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import IconButton from "material-ui/IconButton";
import { logoutUserFromFirebase } from "../../store/actions";

class User extends Component {
  onLogout = () => {
    this.props.logoutUserFromFirebase();
  };

  render() {
    return (
      <UncontrolledDropdown nav className="list-inline-item cart-icon">
        <DropdownToggle nav className="p-0">
          <span className="mr-10">
            <img
              src={require("../../assets/img/user-1.jpg")}
              alt="user profile"
              className="img-fluid rounded-circle"
              width="40"
              height="40"
            />
          </span>
          Snehal Patil
        </DropdownToggle>
        <DropdownMenu right>
          <Scrollbars
            className="rct-scroll"
            autoHeight
            autoHeightMin={100}
            autoHeightMax={280}
            autoHide
          >
            <div style={{ padding: 10 }}>
              <p>Manage my account</p>
              <ul className="list-unstyled mb-0">
                <li style={{ padding: 5, display: "block" }}>
                  <Link
                    to={{
                      pathname: "/app/userProfile",
                      state: { activeTab: 0 }
                    }}
                  >
                    <i
                      className="ti ti-user"
                      style={{ marginLeft: 15, marginRight: 10 }}
                    />
                    My Profile
                  </Link>
                </li>
                {/* <li style={{ padding: 5, display: "block" }}>
                  <Link
                    to={{
                      pathname: "/app/userProfile",
                      state: { activeTab: 0 }
                    }}
                  >
                    <i
                      className="ti ti-user"
                      style={{ marginLeft: 15, marginRight: 10 }}
                    />
                    My Profile
                  </Link>
                </li> */}
              </ul>
            </div>
          </Scrollbars>
          <div className="dropdown-foot d-flex justify-content-between align-items-center">
            <div>
              <Button
                variant="raised"
                className="mr-10 mb-10 btn-xs text-white secondaryButton"
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
})(User);
