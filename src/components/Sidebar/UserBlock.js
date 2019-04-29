/**
 * User Block Component
 */
/* eslint-disable */
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

// components
import SupportPage from '../Support/Support';

// redux action
import { logoutUserFromFirebase } from '../../actions';


// app config
import AppConfig from '../../constants/AppConfig';

class UserBlock extends Component {

    state = {
        userDropdownMenu: false,
        isSupportModal: false
    }

    /**
     * Logout User
     */
    logoutUser() {
        this.props.logoutUserFromFirebase();
    }

    /**
     * Toggle User Dropdown Menu
     */
    toggleUserDropdownMenu() {
        this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
    }

    /**
     * Open Support Modal
     */
    openSupportModal() {
        this.setState({ isSupportModal: true });
    }

    /**
     * On Close Support Page
     */
    onCloseSupportPage() {
        this.setState({ isSupportModal: false });
    }

    /**
     * On Submit Support Page
     */
    onSubmitSupport() {
        this.setState({ isSupportModal: false });
        NotificationManager.success('Message has been sent successfully!');
    }

    render() {
        return (
            <div className="top-sidebar">
                {/*<div className="site-logo">
                    <Link to="/" className="logo-mini">
                        <img src={require('../../assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
                    </Link>
                    <Link to="/" className="logo-normal">
                        <img src={require('../../assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
                    </Link>
                </div>*/}
                <div className="sidebar-user-block media">
                    <div className="user-profile">
                        <img src={require('../../assets/img/user-7.jpg')} alt="user profile" className="img-fluid rounded-circle" width="60" height="129" />
                    </div>
                    <Dropdown isOpen={this.state.userDropdownMenu} toggle={() => this.toggleUserDropdownMenu()} className="rct-dropdown media-body pt-10">
                        <DropdownToggle nav>
                            Lucile Beck
                            <i className="ti-angle-down pull-right"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <ul className="list-unstyled mb-0">
                                <li className="media p-15 border-bottom">
                                    <img src={require('../../assets/img/user-7.jpg')} alt="user profile" className="rounded-circle mr-15" width="42" height="42" />
                                    <div className="media-body">
                                        <p className="mb-0 fs-14">Lucile Beck</p>
                                        <span className="text-muted fs-14">info@example.com</span>
                                    </div>
                                </li>
                                <li>
                                    <Link to={{
                                        pathname: '/app/users/user-profile-1',
                                        state: { activeTab: 0 }
                                    }}>
                                        <i className="ti ti-user"></i>
                                        profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{
                                        pathname: '/app/users/user-profile-1',
                                        state: { activeTab: 2 }
                                    }}>
                                        <i className="ti ti-comment-alt"></i>
                                        messages
                                        <Badge color="danger" className="pull-right">3</Badge>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/app/pages/feedback">
                                        <i className="ti ti-pencil"></i>
                                        feedback
                                        <Badge color="info" className="pull-right">1</Badge>
                                    </Link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => this.openSupportModal()}>
                                        <i className="ti ti-headphone-alt"></i>
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <Link to="/app/pages/faq">
                                        <i className="ti ti-help-alt"></i>
                                        faq(s)
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/app/pages/pricing">
                                        <i className="ti-package"></i>
                                        upgrade Plains
                                    </Link>
                                </li>
                                <li className="border-top">
                                    <a href="javascript:void(0)" onClick={() => this.logoutUser()}>
                                        <i className="ti ti-power-off"></i>
                                        logOut
                                    </a>
                                </li>
                            </ul>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <SupportPage
                    isOpen={this.state.isSupportModal}
                    onCloseSupportPage={() => this.onCloseSupportPage()}
                    onSubmit={() => this.onSubmitSupport()}
                />
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
}

export default connect(mapStateToProps, {
    logoutUserFromFirebase
})(UserBlock);
