import React, {
  Component
} from "react";
import {
  connect
} from "react-redux";
import {
  Scrollbars
} from "react-custom-scrollbars";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import Button from "material-ui/Button";
import {
  Link
} from "react-router-dom";
import {
  Badge,
  Input
} from "reactstrap";
import IconButton from "material-ui/IconButton";
import {
  logoutUserFromFirebase
} from "../../store/actions";
import { NotificationManager } from "react-notifications";

class Search extends Component {
  onSearch(){
    NotificationManager.success("Message has been sent successfully!","",3000);
  }
  render() {
    return ( <UncontrolledDropdown nav className = "list-inline-item cart-icon" >
      <DropdownToggle nav className = "p-0" >
      <IconButton aria-label = "bag" >
      <i className = "fa fa-search" />
      </IconButton> 
      </DropdownToggle>
      <DropdownMenu right>
      <div className = "dropdown-head d-flex justify-content-between" >
      <span > Search </span>
      </div>
      <Scrollbars className = "rct-scroll"
      autoHeight autoHeightMin = {
        70
      }
      autoHeightMax = {
        100
      }
      autoHide >
      <div style = {
        {
          padding: 15
        }
      } >
      <Input placeholder = "What are you looking for ?" />
      </div>
      </Scrollbars>
      <div className = "dropdown-foot d-flex justify-content-between align-items-center" >
      <div >
      <Button variant = "raised"
      className = "mr-10 mb-10 btn-xs text-white primaryButton"
      color = "inherit"
      onClick= {this.onSearch.bind(this)}
      >
      Search 
      </Button>
      </div>
      </div>
      </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
{/* //map state to props */}
const mapStateToProps = ({
  settings
}) => {
  return settings;
};
export default connect(mapStateToProps)(Search);