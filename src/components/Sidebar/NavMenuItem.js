/**
 * Nav Menu Item
 */
import React, { Fragment, Component } from "react";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

class NavMenuItem extends Component {
  render() {
    const { menu, onToggleMenu } = this.props;
    if (menu.child_routes != null) {
      return (
        <Fragment>
          <ListItem
            button
            component="li"
            onClick={onToggleMenu}
            className={classNames({ "item-active": menu.open })}
          >
            <ListItemIcon className="menu-icon">
              <i className={menu.menu_icon} />
            </ListItemIcon>
            <span className="menu">{menu.menu_title}</span>
            {menu.open ? (
              <i className="ti-angle-down side-arrow" />
            ) : (
              <i className="ti-angle-right side-arrow" />
            )}
          </ListItem>
          <Collapse in={menu.open} timeout="auto">
            <List className="sub-menu list-unstyled">
              {menu.child_routes.map((subMenu, index) => {
                return (
                  <ListItem button component="li" key={index}>
                    <ListItemIcon className="menu-icon">
                      <i className={subMenu.menu_icon} />
                    </ListItemIcon>
                    <NavLink activeClassName="item-active" to={subMenu.path}>
                      <span className="menu">{subMenu.menu_title}</span>
                    </NavLink>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Fragment>
      );
    }
    return (
      <ListItem button component="li">
        <NavLink activeClassName="item-active" to={menu.path}>
          <ListItemIcon className="menu-icon">
            <i className={menu.menu_icon} />
          </ListItemIcon>
          <span className="menu">{menu.menu_title}</span>
        </NavLink>
      </ListItem>
    );
  }
}

export default NavMenuItem;
