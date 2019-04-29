/**
 * Promo Widgets Page
 */
import React, { Component } from 'react';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// Components
import ShareFriends from '../../../components/Widgets/ShareFriends';
import PromoCoupons from '../../../components/Widgets/PromoCoupons';
import Rating from '../../../components/Widgets/Rating';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

export default class UserWidgets extends Component {
    render() {
        return (
            <div className="promo-widgets-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.promo" />} match={this.props.match} />
                <div className="row row-eq-height">
                    <div className="col-sm-6 col-md-6 col-xl-6 w-xs-full">
                        <ShareFriends />
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-6 w-xs-full">
                        <PromoCoupons />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-xl-6 w-xs-full">
                        <Rating />
                    </div>
                </div>
            </div>
        );
    }
}
