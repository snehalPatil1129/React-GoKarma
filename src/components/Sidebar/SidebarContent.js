/**
 * Sidebar Content
 */
import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Collapse from 'material-ui/transitions/Collapse';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';

import IntlMessages from '../../util/IntlMessages';

import NavMenuItem from './NavMenuItem';

// redux actions
import { onToggleMenu } from '../../actions';

class SidebarContent extends Component {

    state = {
        multilevel1: false,
        subLevel: false
    }

    toggleMenu(menu, stateCategory) {
        let data = {
            menu,
            stateCategory
        }
        this.props.onToggleMenu(data);
    }

    render() {
        const { sidebarMenus } = this.props.sidebar;
        return (
            <div className="rct-sidebar-nav">
                <nav className="navigation">
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                        subheader={
                            <ListSubheader className="side-title" component="li">
                                <IntlMessages id="sidebar.general" />
                            </ListSubheader>}
                    >
                        {sidebarMenus.category1.map((menu, key) => (
                            <NavMenuItem
                                menu={menu}
                                key={key}
                                onToggleMenu={() => this.toggleMenu(menu, 'category1')}
                            />
                        ))}
                    </List>
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                        subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.modules" /></ListSubheader>}
                    >
                        {sidebarMenus.category2.map((menu, key) => (
                            <NavMenuItem
                                menu={menu}
                                key={key}
                                onToggleMenu={() => this.toggleMenu(menu, 'category2')}
                            />
                        ))}
                    </List>
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                        subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.component" /></ListSubheader>}
                    >
                        {sidebarMenus.category3.map((menu, key) => (
                            <NavMenuItem
                                menu={menu}
                                key={key}
                                onToggleMenu={() => this.toggleMenu(menu, 'category3')}
                            />
                        ))}
                    </List>
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                        subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.features" /></ListSubheader>}
                    >
                        {sidebarMenus.category4.map((menu, key) => (
                            <NavMenuItem
                                menu={menu}
                                key={key}
                                onToggleMenu={() => this.toggleMenu(menu, 'category4')}
                            />
                        ))}
                    </List>
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                        subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.applications" /></ListSubheader>}
                    >
                        {sidebarMenus.category5.map((menu, key) => (
                            <NavMenuItem
                                menu={menu}
                                key={key}
                                onToggleMenu={() => this.toggleMenu(menu, 'category5')}
                            />
                        ))}
                    </List>
                    <List className="rct-mainMenu p-0 m-0 list-unstyled">
                        <ListItem button component="li" onClick={() => this.setState({ multilevel1: !this.state.multilevel1 })}>
                            <ListItemIcon className="menu-icon">
                                <i className="fa fa-circle"></i>
                            </ListItemIcon>
                            <ListItemText className="menu" primary="Multilevel" />
                            {this.state.multilevel1 ? <i className="ti-angle-down side-arrow"></i> : <i className="ti-angle-right side-arrow"></i>}
                        </ListItem>
                        <Collapse in={this.state.multilevel1} timeout="auto">
                            <List className="sub-menu list-unstyled">
                                <ListItem button onClick={() => this.setState({ subLevel: !this.state.subLevel })}>
                                    <ListItemIcon className="menu-icon">
                                        <i className="fa fa-circle"></i>
                                    </ListItemIcon>
                                    <ListItemText className="menu" primary="Sub Level" />
                                    {this.state.subLevel ? <i className="ti-angle-down side-arrow"></i> : <i className="ti-angle-right side-arrow"></i>}
                                </ListItem>
                                <Collapse in={this.state.subLevel} timeout="auto">
                                    <List className="sub-menu list-unstyled">
                                        <ListItem component="li" button>
                                            <ListItemText primary="Sub Level 2" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </Collapse>
                    </List>
                </nav>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ sidebar }) => {
    return { sidebar };
};

export default withRouter(connect(mapStateToProps, {
    onToggleMenu
})(SidebarContent));
